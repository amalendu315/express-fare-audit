// controllers/flight-booking/orchestrator-controller.ts
import fs from "fs";
import { Request, Response } from "express";
import fetch from "node-fetch";
import { ensureToken } from "../../utils/token-manager";
import { OneClickBookingRequest } from "../../types/booking";
import {
  SearchAvailabilityResponse,
  PricingResponse,
  BookingResponse,
  TicketingResponse,
  AirIqFare,
  AirIqFareDescription,
  AirIqPricingFlight,
} from "../../types/airiq-responses";

// ======= CONFIG =======
const AGENT_ID = "AQAG051265";
const USERNAME = "9710101010";
const APP_TYPE = "API";
const VERSION = "V1.0";
const AGENT_INFO = {
  AgentId: AGENT_ID,
  UserName: USERNAME,
  AppType: APP_TYPE,
  Version: VERSION,
};
const DEBUG_PATH = "/tmp/airiq-booking-debug.json";
const VERBOSE = true;

// ======= UTILS =======
function dumpDebug(obj: any, step: string) {
  const entry = { step, timestamp: new Date().toISOString(), data: obj };
  fs.appendFileSync(DEBUG_PATH, JSON.stringify(entry, null, 2) + ",\n");
}
function safeLog(title: string, obj: any) {
  if (!VERBOSE) return;
  console.log(
    "\n\x1b[35m" + "-".repeat(20) + ` ${title} ` + "-".repeat(20) + "\x1b[0m"
  );
  try {
    const str = typeof obj === "string" ? obj : JSON.stringify(obj, null, 2);
    for (let i = 0; i < str.length; i += 2000) {
      console.log(str.substring(i, i + 2000));
    }
  } catch {
    console.log(obj);
  }
}

// ======= CORE LOGIC =======
function getFareAmounts(itinerary: any, paxType: "ADT" | "CHD" | "INF") {
  const fare = itinerary.Fares.find((f: AirIqFare) =>
    f.Faredescription.some((d: AirIqFareDescription) => d.Paxtype === paxType)
  );
  if (!fare) return undefined;
  const fareDesc: AirIqFareDescription = fare.Faredescription.find(
    (d: any) => d.Paxtype === paxType
  );
  if (!fareDesc) return undefined;
  return {
    BaseAmount: fareDesc.BaseAmount,
    GrossAmount: fareDesc.GrossAmount,
  };
}
function amountOr0(x: any) {
  return x ? parseFloat(x) : 0;
}

// ======= MAIN HANDLER =======
export const oneClickBooking = async (
  req: Request<{}, {}, OneClickBookingRequest>,
  res: Response
) => {
  const progress: any = { steps: [] };
  let token: string = "";
  try {
    // ==== Prepare Data ====
    token = await ensureToken();
    const {
      origin,
      destination,
      travelDate,
      flightNumber,
      passengers,
      contact,
    } = req.body;

    safeLog("Start OneClickBooking", {
      origin,
      destination,
      travelDate,
      flightNumber,
      passengers,
      contact,
    });
    dumpDebug({ step: "init", req: req.body }, "init");

    const paxCounts = {
      ADT: passengers.filter((p) => p.type === "ADT").length,
      CHD: passengers.filter((p) => p.type === "CHD").length,
      INF: passengers.filter((p) => p.type === "INF").length,
    };

    // ===== STEP 1: SEARCH =====
    let searchData: SearchAvailabilityResponse | undefined;
    let itinerary: any;
    let searchTrackid: string | undefined;
    try {
      const searchBody = {
        AgentInfo: AGENT_INFO,
        TripType: "O",
        AirlineID: "",
        AvailInfo: [
          {
            DepartureStation: origin,
            ArrivalStation: destination,
            FlightDate: travelDate, // "YYYYMMDD"
            FarecabinOption: "E",
            FareType: "N",
            OnlyDirectFlight: false,
          },
        ],
        PassengersInfo: {
          AdultCount: paxCounts.ADT.toString(),
          ChildCount: paxCounts.CHD.toString(),
          InfantCount: paxCounts.INF.toString(),
        },
      };
      safeLog("STEP 1: Search API Request", searchBody);
      dumpDebug({ searchBody }, "search-request");
      const searchRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
        {
          method: "POST",
          headers: { TOKEN: token, "Content-Type": "application/json" },
          body: JSON.stringify(searchBody),
        }
      );
      safeLog("STEP 1: Search API Status", searchRes.status);
      if (!searchRes.ok) throw new Error("Search API failed");
      searchData = await searchRes.json();
      safeLog("STEP 1: Search API Response", searchData);
      dumpDebug({ searchData }, "search-response");

      // Use exact match for flight number or fallback to first
      itinerary =
        searchData?.ItineraryFlightList?.[0]?.Items?.find(
          (item) =>
            !flightNumber ||
            item.FlightDetails?.[0]?.FlightNumber === flightNumber
        ) || searchData?.ItineraryFlightList?.[0]?.Items?.[0];

      if (!itinerary) throw new Error("No suitable flight found");
      searchTrackid = searchData?.Trackid;
      progress.steps.push({
        step: "search",
        status: "success",
        trackId: searchTrackid,
      });
    } catch (err) {
      safeLog("STEP 1: Search API Error", err);
      dumpDebug({ err }, "search-error");
      progress.steps.push({
        step: "search",
        status: "failed",
        error: err?.toString(),
      });
      return res
        .status(400)
        .json({ error: "SEARCH_FAILED", details: err?.toString(), progress });
    }

    // ===== STEP 2: PRICING =====
    let pricingData: PricingResponse | undefined;
    let totalBaseAmount = 0;
    let totalGrossAmount = 0;
    let pricingFlight: AirIqPricingFlight | undefined;
    let priceToken: string | undefined;
    let bookingTrackId: string | undefined;
    try {
      const adtAmounts = getFareAmounts(itinerary, "ADT");
      const chdAmounts = getFareAmounts(itinerary, "CHD");
      const infAmounts = getFareAmounts(itinerary, "INF");
      totalBaseAmount =
        paxCounts.ADT * amountOr0(adtAmounts?.BaseAmount) +
        paxCounts.CHD * amountOr0(chdAmounts?.BaseAmount) +
        paxCounts.INF * amountOr0(infAmounts?.BaseAmount);
      totalGrossAmount =
        paxCounts.ADT * amountOr0(adtAmounts?.GrossAmount) +
        paxCounts.CHD * amountOr0(chdAmounts?.GrossAmount) +
        paxCounts.INF * amountOr0(infAmounts?.GrossAmount);

      const pricingBody = {
        AgentInfo: AGENT_INFO,
        SegmentInfo: {
          BaseOrigin: origin,
          BaseDestination: destination,
          SegmentType: "D",
          TripType: "O",
          AdultCount: paxCounts.ADT.toString(),
          ChildCount: paxCounts.CHD.toString(),
          InfantCount: paxCounts.INF.toString(),
        },
        Trackid: searchTrackid,
        ItineraryInfo: [
          {
            FlightDetails: itinerary.FlightDetails,
            BaseAmount: totalBaseAmount.toFixed(2),
            GrossAmount: totalGrossAmount.toFixed(2),
          },
        ],
      };
      safeLog("STEP 2: Pricing API Request", pricingBody);
      dumpDebug({ pricingBody }, "pricing-request");
      const pricingRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Pricing",
        {
          method: "POST",
          headers: { TOKEN: token, "Content-Type": "application/json" },
          body: JSON.stringify(pricingBody),
        }
      );
      safeLog("STEP 2: Pricing API Status", pricingRes.status);
      if (!pricingRes.ok) throw new Error("Pricing API failed");
      pricingData = await pricingRes.json();
      safeLog("STEP 2: Pricing API Response", pricingData);
      dumpDebug({ pricingData }, "pricing-response");

      const priceInfo = pricingData?.PriceItenaryInfo?.[0];
      pricingFlight = priceInfo?.AvailabilityResponse?.[0];
      priceToken = pricingFlight?.Token;
      bookingTrackId = priceInfo?.Trackid;
      if (!pricingFlight || !priceToken || !bookingTrackId)
        throw new Error("No flight/token/trackid from Pricing");

      progress.steps.push({
        step: "pricing",
        status: "success",
        priceToken,
        bookingTrackId,
      });
    } catch (err) {
      safeLog("STEP 2: Pricing API Error", err);
      dumpDebug({ err }, "pricing-error");
      progress.steps.push({
        step: "pricing",
        status: "failed",
        error: err?.toString(),
      });
      return res
        .status(400)
        .json({ error: "PRICING_FAILED", details: err?.toString(), progress });
    }

    // ===== STEP 3: BOOKING =====
    let bookingData: BookingResponse | undefined;
    let bookItem: any;
    try {
      const paxDetailsInfo = passengers.map((p, i) => ({
        PaxRefNumber: (i + 1).toString(),
        Title: p.title,
        FirstName: p.firstName,
        LastName: p.lastName,
        DOB: p.dob,
        Gender: p.gender,
        PaxType: p.type,
        PassportNo: p.passportNo ?? "",
        PassportExpiry: p.passportExpiry ?? "",
        PassportIssuedDate: p.passportIssuedDate ?? "",
        InfantRef: p.infantRef ?? "",
      }));
      //  FlighstInfo comes from Pricing.AvailabilityResponse[0].Flights
      const itineraryFlightsInfo = [
        {
          Token: priceToken,
          FlighstInfo: pricingFlight.Flights,
          PaymentMode: "T",
          SeatsSSRInfo: [],
          BaggSSRInfo: [],
          MealsSSRInfo: [],
          OtherSSRInfo: [],
          PaymentInfo: [
            {
              TotalAmount: totalGrossAmount.toFixed(2),
            },
          ],
        },
      ];

      const bookingBody = {
        AgentInfo: AGENT_INFO,
        AdultCount: paxCounts.ADT, // as number!
        ChildCount: paxCounts.CHD,
        InfantCount: paxCounts.INF,
        ItineraryFlightsInfo: itineraryFlightsInfo,
        PaxDetailsInfo: paxDetailsInfo,
        AddressDetails: {
          CountryCode: contact.countryCode,
          ContactNumber: contact.phone,
          EmailID: contact.email,
        },
        GSTInfo: {
          GSTNumber: "",
          GSTCompanyName: "",
          GSTAddress: "",
          GSTEmailID: "",
          GSTMobileNumber: "",
        },
        TripType: "O",
        BlockPNR: true,
        BaseOrigin: origin,
        BaseDestination: destination,
        TrackId: bookingTrackId, // from Pricing!
      };
      safeLog("STEP 3: Booking API Request", bookingBody);
      dumpDebug({ bookingBody }, "booking-request");
      const bookingRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Book",
        {
          method: "POST",
          headers: { TOKEN: token, "Content-Type": "application/json" },
          body: JSON.stringify(bookingBody),
        }
      );
      safeLog("STEP 3: Booking API Status", bookingRes.status);
      if (!bookingRes.ok) throw new Error("Booking API failed");
      bookingData = await bookingRes.json();
      safeLog("STEP 3: Booking API Response", bookingData);
      dumpDebug({ bookingData }, "booking-response");

      bookItem = bookingData?.Bookingresponse?.ItinearyDetails?.[0]?.Item?.[0];
      if (
        !bookItem ||
        bookItem.Resultcode !== "1" ||
        !bookItem.BookingTrackId ||
        !bookItem.AirIqPNR
      ) {
        throw new Error(
          `Booking failed: ${
            bookItem?.Resultcode
              ? `Code ${bookItem.Resultcode}`
              : "No booking item"
          }`
        );
      }
      progress.steps.push({
        step: "booking",
        status: "success",
        BookingTrackId: bookItem.BookingTrackId,
        AirIqPNR: bookItem.AirIqPNR,
      });
    } catch (err) {
      safeLog("STEP 3: Booking API Error", err);
      dumpDebug({ err }, "booking-error");
      progress.steps.push({
        step: "booking",
        status: "failed",
        error: err?.toString(),
      });
      return res
        .status(400)
        .json({ error: "BOOKING_FAILED", details: err?.toString(), progress });
    }

    // ===== STEP 4: ISSUE TICKET =====
    let ticketData: TicketingResponse | undefined;
    try {
      const ticketBody = {
        AgentInfo: AGENT_INFO,
        BookingTrackId: bookItem.BookingTrackId,
        AirIqPNR: bookItem.AirIqPNR,
        AirlinePNR:
          bookItem.TravellerInfo?.Item?.[0]?.SegmentInformation?.Item?.[0]
            ?.AirlinePNR,
        BookingAmount:
          bookItem.PaymentDetails?.Item?.[0]?.Amount ||
          totalGrossAmount.toFixed(2),
        PaymentMode: "T",
      };
      safeLog("STEP 4: Issue Ticket API Request", ticketBody);
      dumpDebug({ ticketBody }, "ticket-request");
      const ticketRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/IssueTicket",
        {
          method: "POST",
          headers: { TOKEN: token, "Content-Type": "application/json" },
          body: JSON.stringify(ticketBody),
        }
      );
      safeLog("STEP 4: Issue Ticket API Status", ticketRes.status);
      if (!ticketRes.ok) throw new Error("IssueTicket API failed");
      ticketData = await ticketRes.json();
      safeLog("STEP 4: Issue Ticket API Response", ticketData);
      dumpDebug({ ticketData }, "ticket-response");
      progress.steps.push({
        step: "ticketing",
        status: "success",
        AirlinePNR: ticketBody.AirlinePNR,
      });
    } catch (err) {
      safeLog("STEP 4: Issue Ticket API Error", err);
      dumpDebug({ err }, "ticketing-error");
      progress.steps.push({
        step: "ticketing",
        status: "failed",
        error: err?.toString(),
      });
      return res
        .status(400)
        .json({
          error: "ISSUE_TICKET_FAILED",
          details: err?.toString(),
          progress,
        });
    }

    // ===== DONE =====
    res.status(200).json({
      status: "SUCCESS",
      progress,
      searchTrackid,
      bookingTrackId,
      AirIqPNR: bookItem.AirIqPNR,
      AirlinePNR:
        bookItem.TravellerInfo?.Item?.[0]?.SegmentInformation?.Item?.[0]
          ?.AirlinePNR,
      ticketData,
      bookingData,
    });
  } catch (error: any) {
    safeLog("FATAL ERROR", error);
    dumpDebug({ error }, "fatal-error");
    res.status(500).json({ error: error?.toString(), status: "FAILED" });
  }
};
