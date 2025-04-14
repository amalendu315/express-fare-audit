import { EnrichmentResultModel } from "../../models/enrichment-result-model";

export interface IEnrichmentService {
  enrich(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<EnrichmentResultModel>;
}
