import { enrichmentQueue } from "./queue";
import { FareAuditService } from "../fare-audit-service";
import { FareAudit } from "../../models/fare-audit-model";

export function startEnrichmentWorker() {
  const service = new FareAuditService();

  enrichmentQueue.subscribe(async (log: FareAudit) => {
    console.log(
      `[QUEUE] Enriching ${log.logType}: ${log.ticketId ?? log.bookingId}`
    );

    if (log.logType === "fare") {
      await service.enrichFareManageAsync(log);
    } else if (log.logType === "booking") {
      await service.enrichBookingTicketAsync(log);
    }
  });
}