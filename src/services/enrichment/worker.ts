import { enrichmentQueue } from "./queue";
import { FareAuditService } from "../fare-audit-service";
import { FareAudit } from "../../models/fare-audit-model";

export function startEnrichmentWorker() {
  const service = new FareAuditService();

  enrichmentQueue.subscribe(async (log: FareAudit) => {
    try {
      console.log(
        `[QUEUE] Enriching ${log.logType}: ${log.logType === "fare" ? log.ticketId : log.bookingId}`
      );

      if (log.logType === "fare") {
        await service.enrichFareManageAsync(log);
      } else if (log.logType === "booking") {
        await service.enrichBookingTicketAsync(log);
      }
    } catch (err) {
      console.error(`[WORKER ERROR] Failed to enrich log ${log.id}:`, err);
    }
  });
}