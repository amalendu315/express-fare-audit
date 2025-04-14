import { PrismaClient, Prisma } from "../generated/prisma";
import { FareAudit } from "../models/fare-audit-model";
import { EnrichmentOrchestrator } from "./enrichment/orchestrator";
import { enrichmentQueue } from "./enrichment/queue";

const prisma = new PrismaClient();
// type FareAudit = Prisma.FareAuditScalarFieldEnum;

export class FareAuditService {
  private orchestrator = new EnrichmentOrchestrator();

  async logFareManageAsync(log: FareAudit): Promise<FareAudit | null> {
    const exists = await prisma.fareAudit.findFirst({
      where: {
        ticketId: log.ticketId,
        fareLogId: log.fareLogId,
        logType:"fare",
      },
    });

    if (exists) return null;

    // ✅ Remove id before passing to Prisma
    const { id, ...logDataWithoutId } = log;
    const newLog = await prisma.fareAudit.create({ data: logDataWithoutId });
    return newLog;
  }

  async logBookingTicketAsync(log: FareAudit): Promise<FareAudit | null> {
    const exists = await prisma.fareAudit.findFirst({
      where: {
        bookingId: log.bookingId,
        ticketId: log.ticketId,
        logType:"booking",
      },
    });

    if (exists) return null;

    const { id, ...logDataWithoutId } = log;

    const newLog = await prisma.fareAudit.create({ data: logDataWithoutId });
    return newLog;
  }

  async enrichFareManageAsync(log: FareAudit): Promise<void> {
    const fd = await this.orchestrator.getFlightDetailEnrichmentAsync(
      log.ticketId,
      "fare"
    );
    if (!fd) return;

    const sector = fd.sector!;
    const flightDate = fd.travelDateTime;
    const flightNumber = Number(fd.flightNumber);

    const [fs, ao] = await this.orchestrator.enrichBothAsync(
      flightNumber,
      sector,
      flightDate
    );

    const updated = await prisma.fareAudit.update({
      where: { id: log.id },
      data: {
        flightSector: sector,
        travelDateTime: flightDate,

        fsSameFlightFare: fs?.sameFlightFare,
        fsLowestFlightFare: fs?.lowestFlightFare,
        fsAvailableStock: fs?.availableStock,
        fsAverageFare: fs?.averageFare,
        fsErrorMessage: fs?.errorMessage,

        aoSameFlightFare: ao?.sameFlightFare,
        aoLowestFare: ao?.lowestFlightFare,
        aoAverageFare: ao?.averageFare,
        aoErrorMessage: ao?.errorMessage,

        taskCompletedDateTime: new Date(),
        status:
          fs?.errorMessage || ao?.errorMessage
            ? "Partially Completed"
            : "Completed",
        remark: "Auto enriched",
      },
    });
    console.log(`[ENRICH DONE] TicketID: ${log.ticketId}`);
  }

  async enrichBookingTicketAsync(log: FareAudit): Promise<void> {
    if(!log.bookingId) {
      console.log(`[ENRICH DONE] TicketID: ${log.ticketId} - Not Enriched`);
      return;
    }
    const fd = await this.orchestrator.getFlightDetailEnrichmentAsync(
      log?.bookingId,
      "booking"
    );
    if (!fd) return;

    const sector = fd.sector!;
    const flightDate = fd.travelDateTime;
    const flightNumber = fd.flightNumber;

    const [fs, ao] = await this.orchestrator.enrichBothAsync(
      flightNumber,
      sector,
      flightDate
    );

    await prisma.fareAudit.update({
      where: { id: log.id },
      data: {
        flightSector: sector,
        travelDateTime: flightDate,

        fsSameFlightFare: fs?.sameFlightFare,
        fsLowestFlightFare: fs?.lowestFlightFare,
        fsAvailableStock: fs?.availableStock,
        fsAverageFare: fs?.averageFare,
        fsErrorMessage: fs?.errorMessage,

        aoSameFlightFare: ao?.sameFlightFare,
        aoLowestFare: ao?.lowestFlightFare,
        aoAverageFare: ao?.averageFare,
        aoErrorMessage: ao?.errorMessage,

        taskCompletedDateTime: new Date(),
        status:
          fs?.errorMessage || ao?.errorMessage
            ? "Partially Completed"
            : "Completed",
        remark: "Auto enriched",
      },
    });

    console.log(`[ENRICH DONE] BookingID: ${log.bookingId}`);
  }
}
