// In types/airiq-api.ts

import { Gender, PaxType } from "./booking";

export interface AirIqAgentInfo {
  AgentId: string;
  UserName: string;
  AppType: string;
  Version: string;
}

export interface SearchAvailabilityRequest {
  AgentInfo: AirIqAgentInfo;
  TripType: "O" | "R";
  AirlineID: string;
  AvailInfo: Array<{
    DepartureStation: string;
    ArrivalStation: string;
    FlightDate: string;
    FarecabinOption: string;
    FareType: string;
    OnlyDirectFlight: boolean;
  }>;
  PassengersInfo: {
    AdultCount: string;
    ChildCount: string;
    InfantCount: string;
  };
}

// For pricing, booking, ticketing – only include essential, add more as needed
export interface PricingRequest {
  AgentInfo: AirIqAgentInfo;
  SegmentInfo: {
    BaseOrigin: string;
    BaseDestination: string;
    SegmentType: string;
    TripType: "O" | "R";
    AdultCount: string;
    ChildCount: string;
    InfantCount: string;
  };
  Trackid: string;
  ItineraryInfo: Array<{
    FlightDetails: any[];
    BaseAmount: string;
    GrossAmount: string;
  }>;
}

export interface BookingPassenger {
  PaxRefNumber: string;
  Title: "MR" | "MS" | "MRS";
  FirstName: string;
  LastName: string;
  DOB: string;
  Gender: Gender;
  PaxType: PaxType;
  PassportNo?: string;
  PassportExpiry?: string;
  PassportIssuedDate?: string;
  InfantRef?: string;
}

export interface BookingRequest {
  AgentInfo: AirIqAgentInfo;
  AdultCount: number;
  ChildCount: number;
  InfantCount: number;
  ItineraryFlightsInfo: any[];
  PaxDetailsInfo: BookingPassenger[];
  AddressDetails: {
    CountryCode: string;
    ContactNumber: string;
    EmailID: string;
  };
  GSTInfo: {
    GSTNumber: string;
    GSTCompanyName: string;
    GSTAddress: string;
    GSTEmailID: string;
    GSTMobileNumber: string;
  };
  TripType: "O" | "R";
  BlockPNR: boolean;
  BaseOrigin: string;
  BaseDestination: string;
  TrackId: string;
}

export interface TicketingRequest {
  AgentInfo: AirIqAgentInfo;
  BookingTrackId: string;
  AirIqPNR: string;
  AirlinePNR: string;
  BookingAmount: string;
  PaymentMode: string;
}
