export interface EnrichmentResultModel {
  sameFlightFare: number;
  lowestFlightFare: number;
  availableStock: number;
  sameFlightStock: number;
  lowestFareFlightNumber: string | null;
  lowestFareFlightDepartureTime: Date | null;
  averageFare: number;
  windowedLowestFare: number | null;
  windowedLowestFareFlightNumber: string | null;
  windowedLowestFareDepartureTime: Date | null;
  errorMessage?: string;
  remarks?: string;
}
