// controllers/flight-booking/orchestrator-controller.ts

import { Request, Response } from "express";
import fetch from "node-fetch";
import { ensureToken } from "../../utils/token-manager";
import {
  OneClickBookingRequest,
} from "../../types/booking";
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

// === 1. Main Orchestrator Handler ===

export const oneClickBooking = async (
  req: Request<{}, {}, OneClickBookingRequest>,
  res: Response
) => {
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

    // --- 1. Search Step ---
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
        AdultCount: passengers
          .filter((p) => p.type === "ADT")
          .length.toString(),
        ChildCount: passengers
          .filter((p) => p.type === "CHD")
          .length.toString(),
        InfantCount: passengers
          .filter((p) => p.type === "INF")
          .length.toString(),
      },
    };

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
    if (!searchRes.ok) throw new Error("Search API failed");
    const searchData: SearchAvailabilityResponse = await searchRes.json();

    const itinerary =
      searchData.ItineraryFlightList[0]?.Items?.find((item) => {
        if (!flightNumber) return true;
        return item.FlightDetails[0]?.FlightNumber === flightNumber;
      }) || searchData.ItineraryFlightList[0]?.Items[0];

    if (!itinerary) throw new Error("No suitable flight found");

    // Get Trackid for Pricing step
    const searchTrackid = searchData.Trackid;

    // --- 2. Pricing Step ---
    // Find the fare for ADT or first fare in Fares
    const mainFare: AirIqFare =
      itinerary.Fares.find((f) =>
        f.Faredescription.some((d) => d.Paxtype === "ADT")
      ) || itinerary.Fares[0];
    const fareDesc: AirIqFareDescription =
      mainFare.Faredescription.find((d) => d.Paxtype === "ADT") ||
      mainFare.Faredescription[0];

    const pricingBody = {
      AgentInfo: AGENT_INFO,
      SegmentInfo: {
        BaseOrigin: origin,
        BaseDestination: destination,
        SegmentType: "D",
        TripType: "O",
        AdultCount: searchBody.PassengersInfo.AdultCount,
        ChildCount: searchBody.PassengersInfo.ChildCount,
        InfantCount: searchBody.PassengersInfo.InfantCount,
      },
      Trackid: searchTrackid,
      ItineraryInfo: [
        {
          FlightDetails: itinerary.FlightDetails,
          BaseAmount: fareDesc.BaseAmount,
          GrossAmount: fareDesc.GrossAmount,
        },
      ],
    };

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
    if (!pricingRes.ok) throw new Error("Pricing API failed");
    const pricingData: PricingResponse = await pricingRes.json();

    const priceInfo = pricingData.PriceItenaryInfo?.[0];
    const pricingFlight =
      priceInfo.AvailabilityResponse?.[0] || priceInfo?.AvailabilityResponse[0];
    const priceToken = pricingFlight.Token;

    // --- 3. Booking Step ---
    const bookingTrackId = priceInfo.Trackid;

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
            TotalAmount: fareDesc.GrossAmount,
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
      AdultCount: searchBody.PassengersInfo.AdultCount,
      ChildCount: searchBody.PassengersInfo.ChildCount,
      InfantCount: searchBody.PassengersInfo.InfantCount,
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
    if (!bookingRes.ok) throw new Error("Booking API failed");
    const bookingData: BookingResponse = await bookingRes.json();

    const bookItem =
      bookingData.Bookingresponse.ItinearyDetails?.[0]?.Item?.[0];
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

    // --- 4. Issue Ticket Step ---
    const ticketBody = {
      AgentInfo: AGENT_INFO,
      BookingTrackId: bookItem.BookingTrackId,
      AirIqPNR: bookItem.AirIqPNR,
      AirlinePNR:
        bookItem.TravellerInfo.Item?.[0]?.SegmentInformation.Item?.[0]
          ?.AirlinePNR,
      BookingAmount:
        bookItem.PaymentDetails.Item?.[0]?.Amount || fareDesc.GrossAmount,
      PaymentMode: "T",
    };

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
    if (!ticketRes.ok) throw new Error("IssueTicket API failed");
    const ticketData: TicketingResponse = await ticketRes.json();

    // --- Done! Return the issued ticket response ---
    res.status(200).json({
      searchData,
      pricingData,
      bookingData,
      ticketData,
      status: "SUCCESS",
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message || "Something went wrong",
      status: "FAILED",
    });
  }
};
