// In types/booking.ts

export type Gender = "Male" | "Female";
export type PaxType = "ADT" | "CHD" | "INF";

export interface Passenger {
  title: "MR" | "MS" | "MRS";
  firstName: string;
  lastName: string;
  dob: string; // "DD/MM/YYYY"
  gender: Gender;
  type: PaxType;
  passportNo?: string;
  passportExpiry?: string;
  passportIssuedDate?: string;
  infantRef?: string;
}

export interface ContactInfo {
  countryCode: string;
  phone: string;
  email: string;
}

export interface OneClickBookingRequest {
  origin: string;
  destination: string;
  travelDate: string; // "YYYYMMDD" or "DD/MM/YYYY"
  flightNumber?: string; // Optional: pick first available if not given
  expectedFare?: string; // Optional: for fare validation if provided
  farecabinOption?: string; // Optional: e.g., "Economy", "Business"
  fareType?: string; // Optional: e.g., "Published", "Private"
  tripType: "D" | "I"; // "D" for Domestic, "I" for international
  passengers: Passenger[];
  contact: ContactInfo;
}
