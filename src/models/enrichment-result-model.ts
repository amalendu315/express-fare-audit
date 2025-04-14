export interface EnrichmentResultModel {
  sameFlightFare: number;
  lowestFlightFare: number;
  availableStock: number;
  averageFare: number;
  errorMessage?: string;
  remarks?: string;
}
