// controllers/flight-booking/orchestrator-controller.ts

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
} from "../../types/airiq-responses";

// Change these as per your AirIQ credentials
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

const VERBOSE = true; // Change to false in prod if you want

function logStep(title: string, details?: any) {
  const bar = "-".repeat(40);
  console.log(`\n\x1b[36m${bar}\n[${title}]\n${bar}\x1b[0m`);
  if (details !== undefined) {
    if (typeof details === "string") {
      console.log(details);
    } else {
      // Log partial data for large responses
      console.log(JSON.stringify(details, null, 2).slice(0, 1500)); // Show only first 1500 chars
      if (JSON.stringify(details).length > 1500) {
        console.log("[...truncated...]");
      }
    }
  }
}

// --- Helper functions ---

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

export const oneClickBooking = async (
  req: Request<{}, {}, OneClickBookingRequest>,
  res: Response
) => {
  const progress: any = {
    steps: [],
  };

  try {
    const token = await ensureToken();
    const {
      origin,
      destination,
      travelDate,
      flightNumber,
      passengers,
      contact,
    } = req.body;

    logStep("Start OneClickBooking", {
      origin,
      destination,
      travelDate,
      flightNumber,
      passengers,
      contact,
    });

    const paxCounts = {
      ADT: passengers.filter((p) => p.type === "ADT").length,
      CHD: passengers.filter((p) => p.type === "CHD").length,
      INF: passengers.filter((p) => p.type === "INF").length,
    };

    // ========== STEP 1: Search ==========

    let searchData: SearchAvailabilityResponse | undefined = undefined;
    let itinerary: any = undefined;
    let searchTrackid: string | undefined = undefined;
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

      logStep("STEP 1: Search API Request", searchBody);
      const searchRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
        {
          method: "POST",
          headers: {
            TOKEN: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchBody),
        }
      );
      logStep("STEP 1: Search API Status", `HTTP ${searchRes.status}`);
      if (!searchRes.ok) throw new Error("Search API failed");
      searchData = await searchRes.json();
      logStep("STEP 1: Search API Response", searchData);

      itinerary =
        searchData?.ItineraryFlightList[0]?.Items?.find((item) => {
          if (!flightNumber) return true;
          return item.FlightDetails[0]?.FlightNumber === flightNumber;
        }) || searchData?.ItineraryFlightList[0]?.Items[0];

      if (!itinerary) throw new Error("No suitable flight found");

      searchTrackid = searchData?.Trackid;
      progress.steps.push({
        step: "search",
        status: "success",
        trackId: searchTrackid,
      });
    } catch (err) {
      logStep("STEP 1: Search API Error", err);
      progress.steps.push({
        step: "search",
        status: "failed",
        error: err?.toString(),
      });
      return res.status(400).json({
        error: "SEARCH_FAILED",
        details: err?.toString(),
        progress,
      });
    }

    // ========== STEP 2: Pricing ==========

    let pricingData: PricingResponse | undefined = undefined;
    let totalBaseAmount = 0;
    let totalGrossAmount = 0;
    let pricingFlight: any = undefined;
    let priceToken: string | undefined = undefined;
    let bookingTrackId: string | undefined = undefined;
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

      logStep("STEP 2: Pricing API Request", pricingBody);
      const pricingRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Pricing",
        {
          method: "POST",
          headers: {
            TOKEN: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pricingBody),
        }
      );
      logStep("STEP 2: Pricing API Status", `HTTP ${pricingRes.status}`);
      if (!pricingRes.ok) throw new Error("Pricing API failed");
      pricingData = await pricingRes.json();
      logStep("STEP 2: Pricing API Response", pricingData);

      const priceInfo = pricingData?.PriceItenaryInfo?.[0];
      pricingFlight =
        priceInfo?.AvailabilityResponse?.[0] ||
        priceInfo?.AvailabilityResponse[0];
      priceToken = pricingFlight.Token;
      bookingTrackId = priceInfo?.Trackid;

      progress.steps.push({
        step: "pricing",
        status: "success",
        priceToken,
        bookingTrackId,
      });
    } catch (err) {
      logStep("STEP 2: Pricing API Error", err);
      progress.steps.push({
        step: "pricing",
        status: "failed",
        error: err?.toString(),
      });
      return res.status(400).json({
        error: "PRICING_FAILED",
        details: err?.toString(),
        progress,
      });
    }

    // ========== STEP 3: Booking ==========

    let bookingData: BookingResponse | undefined = undefined;
    let bookItem: any = undefined;
    try {
      const itineraryFlightsInfo = [
        {
          Token: priceToken,
          FlighstInfo: itinerary.FlightDetails,
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

      const bookingBody = {
        AgentInfo: AGENT_INFO,
        AdultCount: paxCounts.ADT.toString(),
        ChildCount: paxCounts.CHD.toString(),
        InfantCount: paxCounts.INF.toString(),
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
        TrackId: bookingTrackId,
      };

      logStep("STEP 3: Booking API Request", bookingBody);

      const bookingRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Book",
        {
          method: "POST",
          headers: {
            TOKEN: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingBody),
        }
      );
      logStep("STEP 3: Booking API Status", `HTTP ${bookingRes.status}`);
      if (!bookingRes.ok) throw new Error("Booking API failed");
      bookingData = await bookingRes.json();
      logStep("STEP 3: Booking API Response", bookingData);

      bookItem = bookingData?.Bookingresponse.ItinearyDetails?.[0]?.Item?.[0];
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
      logStep("STEP 3: Booking API Error", err);
      progress.steps.push({
        step: "booking",
        status: "failed",
        error: err?.toString(),
      });
      return res.status(400).json({
        error: "BOOKING_FAILED",
        details: err?.toString(),
        progress,
      });
    }

    // ========== STEP 4: Issue Ticket ==========

    let ticketData: TicketingResponse | undefined = undefined;
    try {
      const ticketBody = {
        AgentInfo: AGENT_INFO,
        BookingTrackId: bookItem.BookingTrackId,
        AirIqPNR: bookItem.AirIqPNR,
        AirlinePNR:
          bookItem.TravellerInfo.Item?.[0]?.SegmentInformation.Item?.[0]
            ?.AirlinePNR,
        BookingAmount:
          bookItem.PaymentDetails.Item?.[0]?.Amount ||
          totalGrossAmount.toFixed(2),
        PaymentMode: "T",
      };

      logStep("STEP 4: Issue Ticket API Request", ticketBody);

      const ticketRes = await fetch(
        "https://airiqapi.tesepr.com/TravelAPI.svc/IssueTicket",
        {
          method: "POST",
          headers: {
            TOKEN: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ticketBody),
        }
      );
      logStep("STEP 4: Issue Ticket API Status", `HTTP ${ticketRes.status}`);
      if (!ticketRes.ok) throw new Error("IssueTicket API failed");
      ticketData = await ticketRes.json();
      logStep("STEP 4: Issue Ticket API Response", ticketData);

      progress.steps.push({
        step: "ticketing",
        status: "success",
        AirlinePNR: ticketBody.AirlinePNR,
      });
    } catch (err) {
      logStep("STEP 4: Issue Ticket API Error", err);
      progress.steps.push({
        step: "ticketing",
        status: "failed",
        error: err?.toString(),
      });
      return res.status(400).json({
        error: "ISSUE_TICKET_FAILED",
        details: err?.toString(),
        progress,
      });
    }

    // ========== DONE ==========

    res.status(200).json({
      status: "SUCCESS",
      progress,
      searchTrackid,
      bookingTrackId,
      AirIqPNR: bookItem.AirIqPNR,
      AirlinePNR:
        bookItem.TravellerInfo.Item?.[0]?.SegmentInformation.Item?.[0]
          ?.AirlinePNR,
      ticketData,
      bookingData,
    });
  } catch (error: any) {
    logStep("FATAL ERROR", error);
    res.status(500).json({
      error: error?.toString(),
      status: "FAILED",
    });
  }
};
