export interface EnrichmentResultModel {
  sameFlightFare: number;
  lowestFlightFare: number;
  availableStock: number;
  sameFlightStock: number;
  lowestFareFlightNumber: string | null;
  lowestFareFlightDepartureTime: Date | null;
  averageFare: number;
  errorMessage?: string;
  remarks?: string;
}
