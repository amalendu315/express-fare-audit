import { Decimal } from "@prisma/client/runtime/library";

export interface FareAudit {
  id: number;

  // RequestBody-Data Saving
  bookingId: number | null; // Nullable for fare manage logs
  ticketId: number;
  fareLogId: number;
  logType: string;
  source: string;
  requestDateTime: Date;

  // Flight Details Saving
  pnr: string | null; // Nullable for fare manage logs
  flightSector: string;
  flightNumber: string;
  travelDateTime: Date;

  // FS Enrichment Data
  fsSameFlightFare: Decimal | null; // Nullable for fare manage logs
  fsLowestFlightFare: Decimal | null; // Nullable for fare manage logs;
  fsAvailableStock: number | null; // Nullable for fare manage logs
  fsErrorMessage: string | null; // Nullable for fare manage logs
  fsAverageFare: Decimal | null; // Nullable for fare manage logs

  // AO Enrichment Data
  aoSameFlightFare: Decimal | null; // Nullable for fare manage logs
  aoLowestFare: Decimal | null; // Nullable for fare manage logs
  aoAverageFare: Decimal | null; // Nullable for fare manage logs;
  aoErrorMessage: string | null; // Nullable for fare manage logs;

  // FlightWise Seats & Cost
  flightWiseTotalSeatsPurchased?: number | null; // Nullable for fare manage logs
  flightWiseTotalSeatsSold?: number | null; // Nullable for fare manage logs
  flightWiseTotalSeatsLeft?: number | null; // Nullable for fare manage logs
  flightWiseAverageCost: Decimal | null; // Nullable for fare manage logs

  // RouteWise Seats & Cost
  routeWiseSeatsPurchased?: number | null; // Nullable for fare manage logs
  routeWiseSeatsSold?: number | null; // Nullable for fare manage logs
  routeWiseSeatsLeft?: number | null; // Nullable for fare manage logs
  routeWiseAverageCost: Decimal | null; // Nullable for fare manage logs

  // Average Sell Fare
  averageSellFare: Decimal | null; // Nullable for fare manage logs

  // Enrichment Status and Custom Fields
  status: string | null; // Nullable for fare manage logs
  remark: string | null; // Nullable for fare manage logs
  taskCompletedDateTime: Date;
}
