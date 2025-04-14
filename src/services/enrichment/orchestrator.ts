import { FsEnrichmentService } from "./fs-service";
import { AoEnrichmentService } from "./ao-service";
import { flightDetailService } from "../flight-detail/service";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";
import { FlightDetailResultModel } from "../../models/flight-detail-result-model";

export class EnrichmentOrchestrator {
  private fs = new FsEnrichmentService();
  private ao = new AoEnrichmentService();

  async enrichBothAsync(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<[EnrichmentResultModel | null, EnrichmentResultModel | null]> {
    const fsTask = this.fs.enrich(flightNumber, flightSector, travelDateTime);
    const aoTask = this.ao.enrich(flightNumber, flightSector, travelDateTime);
    const [fs, ao] = await Promise.all([fsTask, aoTask]);
    return [fs, ao];
  }

  async getFlightDetailEnrichmentAsync(
    id: number,
    type: "fare" | "booking"
  ): Promise<FlightDetailResultModel | null> {
    return flightDetailService.getFlightDetails(id, type);
  }
}
