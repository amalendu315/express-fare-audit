export interface EnrichmentResultModel {
  sameFlightFare: number;
  lowestFlightFare: number;
  availableStock: number;
  sameFlightStock: number;
  lowestFareFlightNumber: number;
  lowestFareFlightDepartureTime: Date | null;
  averageFare: number;
  errorMessage?: string;
  remarks?: string;
}
