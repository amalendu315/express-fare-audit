export interface EnrichmentResultModel {
  sameFlightFare: number;
  lowestFlightFare: number;
  availableStock: number;
  sameFlightStock: number;
  averageFare: number;
  errorMessage?: string;
  remarks?: string;
}
