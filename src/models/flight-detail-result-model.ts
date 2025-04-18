import { Decimal } from "@prisma/client/runtime/library";

export interface FlightDetailResultModel {
  destinationId: number;
  ticketId?: number;
  fareLogId?: number;
  sector?: string;
  fromCode?: string;
  toCode?: string;
  airlineName?: string;
  travelDateTime: Date;
  flightNumber: number;
  pnr?: string;
  purchaseQty: number;
  costPrice: number;
  bookingPaxQty: number;
  salePrice: number;

  flightWiseStock: number;
  flightWiseConfirmed: number;
  flightWiseBlocked: number;
  flightWiseReturned: number;
  flightWiseLiveQty: number;
  flightWiseAvgCost: Decimal | null;
  flightWiseAvgLiveFare: Decimal | null;

  sectorWiseTotalStock: number;
  sectorWiseConfirmed: number;
  sectorWiseBlocked: number;
  sectorWiseReturn: number;
  sectorWiseLiveQty: number;
  sectorWiseAvgCost: Decimal  | null;
  sectorWiseAvgLiveFare: Decimal | null;

  dailySale: number;
  dailyRefund: number;

  isBlackout?: number;
}
