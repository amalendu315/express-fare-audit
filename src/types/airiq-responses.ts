// types/airiq-responses.ts

// === Common Types ===
export interface AirIqStatus {
  Error: string;
  ResultCode: string;
  SequenceID: string;
}

export interface AirIqTaxDetail {
  Amount: string;
  Code?: string; // for search/pricing
  CurrencyCode?: string; // for booking/ticketing
  TaxCode?: string; // for booking/ticketing
}

// === 1. Search Response Types ===

export interface AirIqFareDescription {
  Paxtype: string;
  BaseAmount: string;
  TotalTaxAmount: string;
  GrossAmount: string;
  NetAmount: string;
  Commission: string;
  Incentive: string;
  Servicecharge: string;
  TDS: string;
  Discount: string;
  PLBAmount: string;
  SF: string;
  SFGST: string;
  Taxes: AirIqTaxDetail[];
}

export interface AirIqFare {
  Currency: string;
  FareType: string;
  Faredescription: AirIqFareDescription[];
  FlightId: string;
}

export interface AirIqFlightDetail {
  FlightID: string;
  AirlineDescription: string;
  FlightNumber: string;
  Origin: string;
  Destination: string;
  DepartureTerminal: string;
  ArrivalTerminal: string;
  DepartureDateTime: string;
  ArrivalDateTime: string;
  Class: string;
  JourneyTime: string;
  ReferenceToken: string;
  SegRef: string;
  ItinRef: string;
  ConnectionFlag: string;
  FareId: string;
  Cabin: string;
  FareBasisCode: string;
  Stops: string | null;
  Via: string;
  AirlineCategory: string;
  CNX: string;
  PlatingCarrier: string;
  OperatingCarrier: string;
  SegmentDetails: string;
  FlyingTime: string;
  OfflineIndicator: boolean;
  MultiClass: string | null;
  AllowFQT: boolean;
  AvailSeat: string;
  PromoCode: string;
  PromoCodeDesc: string;
  FareTypeDescription: string;
  FareDescription: string;
  FareRuleInfo: string | null;
  Refundable: string;
  Baggage: string;
}

export interface AirIqMeal {
  Amount: string;
  Code: string;
  Description: string;
  Destination: string;
  IsBundleServiceMeal: boolean;
  Itinref: string;
  MealID: string;
  Orgin: string;
  SegRef: string;
  Url: string;
}

export interface AirIqBaggage {
  Amount: string;
  BaggageID: string;
  BaggageText: string;
  Code: string;
  Description: string;
  Destination: string;
  Itinref: string;
  Orgin: string;
  SegRef: string;
}

export interface AirIqOtherService {
  Amount: string;
  Description: string;
  Destination: string;
  Itinref: string;
  Orgin: string;
  OtherID: string;
  OtherSSRtext: string | null;
  SSRCode: string;
  SSRRef: string | null;
  SSRType: string;
  SegRef: string;
}

export interface AirIqSearchItem {
  FlightDetails: AirIqFlightDetail[];
  Fares: AirIqFare[];
}

export interface AirIqItineraryFlightItem {
  Items: AirIqSearchItem[];
  Status: AirIqStatus;
}

export interface SearchAvailabilityResponse {
  Trackid: string;
  ItineraryFlightList: AirIqItineraryFlightItem[];
  // ...Add fields if discovered
}

// === 2. Pricing Response Types ===

export interface AirIqPricingFlight {
  Token: string;
  Flights: AirIqFlightDetail[];
}

export interface AirIqPricingFare {
  Currency: string;
  FareType: string;
  Faredescription: AirIqFareDescription[];
  FlightId: string;
}

export interface AirIqPricingMeal extends AirIqMeal {}
export interface AirIqPricingBaggage extends AirIqBaggage {}
export interface AirIqPricingOtherService extends AirIqOtherService {}

export interface AirIqPriceItineraryInfo {
  Trackid: string;
  AvailabilityResponse: AirIqPricingFlight[];
  Meal: AirIqPricingMeal[];
  Bagg: AirIqPricingBaggage[];
  CacheAvail: boolean;
  OtherService: AirIqPricingOtherService[];
  IsCurChange: boolean;
  OfficeId: string;
  Sqe: string;
  Status: AirIqStatus | null;
  Stock: string;
}

export interface PricingResponse {
  PriceItenaryInfo: AirIqPriceItineraryInfo[];
  ResponseStatus: AirIqStatus;
}

// === 3. Booking & Ticketing Response Types (Structurally similar) ===

export interface AirIqBookingMonetaryDetail {
  BasicAmount: string;
  BasicCurrencyCode: string;
  CurrencyCode: string;
  GrossAmount: string;
  PLBAmount: string;
  ServiceTax: string;
  ServiceTaxAmount: string;
  TaxDetails: {
    item: AirIqTaxDetail[];
  };
  TransactionFee: string;
  TransactionFeeAmount: string;
}

export interface AirIqSegmentInformation {
  Item: Array<{
    AirlinePNR: string;
    TicketNo: string;
    FlightNumber: string;
    Origin: string;
    Destination: string;
    DepartureDateTime: string;
    ArrivalDateTime: string;
    AirCraftType: string;
    CarrierCode: string;
    ClassCode: string;
    FareBasis: string;
    FrequentFlyerNumber: string;
    SpRequest: string;
    MealsPreference: string;
    MealsAmount: string;
    BaggagePreference: string;
    BaggageAmount: string;
    SeatPreference: string;
    SeatAmount: string;
  }>;
  MonetaryDetail: AirIqBookingMonetaryDetail;
}

export interface AirIqTravellerInfo {
  Item: Array<{
    Title: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    PaxType: string;
    TicketNumber: string;
    SegmentInformation: AirIqSegmentInformation;
  }>;
}

export interface AirIqBookingPaymentDetails {
  Item: Array<{
    Amount: string;
    CurrencyCode: string;
  }>;
}

export interface AirIqBookingItem {
  Resultcode: string;
  BookingTrackId: string;
  AirIqPNR: string;
  CRSPNR: string;
  BaseOrigin: string;
  BaseDestination: string;
  GST_Number: string;
  TicketingTimeLimit: string;
  PromoCode: string;
  Class: string;
  PrintTicket: string;
  SegmentType: string;
  Special: string;
  Stock: string;
  TripType: string;
  PaymentDetails: AirIqBookingPaymentDetails;
  TourCode: string;
  TravellerInfo: AirIqTravellerInfo;
}

export interface AirIqItineraryDetails {
  AdultCount: string;
  ChildCount: string;
  InfantCount: string;
  IssuedDate: string;
  Item: AirIqBookingItem[];
  OtherCharges: string;
  SegmentType: string;
  TerminalContactDetails: {
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    Email: string;
    Phone: string;
    State: string;
    TerminalName: string;
  };
  TotalAmount: string;
  TotalSegments: string;
  TripType: string;
}

export interface AirIqBookingResponse {
  ItinearyDetails: AirIqItineraryDetails[];
}

export interface BookingResponse {
  TrackId: string;
  Bookingresponse: AirIqBookingResponse;
  Status: AirIqStatus;
}

// For issue ticket, the structure is the same:
export interface TicketingResponse {
  TrackId: string;
  Bookingresponse: AirIqBookingResponse;
  Status: AirIqStatus;
}
