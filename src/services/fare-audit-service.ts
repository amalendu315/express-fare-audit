import { PrismaClient, Prisma } from "../generated/prisma";
import { FareAudit } from "../models/fare-audit-model";
import { EnrichmentOrchestrator } from "./enrichment/orchestrator";
import { enrichmentQueue } from "./enrichment/queue";

const prisma = new PrismaClient();
// type FareAudit = Prisma.FareAuditScalarFieldEnum;

   function getISTDate(): Date {
     const now = new Date();
     const offsetInMilliseconds = 5.5 * 60 * 60 * 1000;
     return new Date(now.getTime() + offsetInMilliseconds);
   }

export class FareAuditService {
  private orchestrator = new EnrichmentOrchestrator();

  async logFareManageAsync(log: FareAudit): Promise<FareAudit | null> {
    const exists = await prisma.fareAudit.findFirst({
      where: {
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
        logType:"booking",
      },
    });

    if (exists) return null;

    const { id, ...logDataWithoutId } = log;

    const newLog = await prisma.fareAudit.create({ data: logDataWithoutId });
    return newLog;
  }

  async enrichFareManageAsync(log: FareAudit): Promise<void> {
    const sector = log.flightSector!;
    const flightDate = log.travelDateTime;
    const flightNumber = Number(log.flightNumber);

    const [fs, ao] = await this.orchestrator.enrichBothAsync(
      flightNumber,
      sector,
      flightDate
    );

    console.log(
      `FS and AO returned with values :_ ${JSON.stringify(fs)} ${JSON.stringify(
        ao
      )}`
    );

    const updated = await prisma.fareAudit.update({
      where: { id: log.id },
      data: {
        flightSector: sector,
        travelDateTime: flightDate,

        fsSameFlightFare: fs?.sameFlightFare,
        fsLowestFlightFare: fs?.lowestFlightFare,
        fsAvailableStock: fs?.availableStock,
        fsSameFlightStock: fs?.sameFlightStock,
        fsLowestFareFlightNumber: fs?.lowestFareFlightNumber,
        fsLowestFareFlightDepartureTime: fs?.lowestFareFlightDepartureTime,
        fsAverageFare: fs?.averageFare,
        fsErrorMessage: fs?.errorMessage,

        aoSameFlightFare: ao?.sameFlightFare,
        aoLowestFare: ao?.lowestFlightFare,
        aoAverageFare: ao?.averageFare,
        aoLowestFareFlightNumber: ao?.lowestFareFlightNumber,
        aoAvailableStock: ao?.availableStock,
        aoLowestFareFlightDepartureTime: ao?.lowestFareFlightDepartureTime,
        aoSameFlightStock: ao?.sameFlightStock,
        aoErrorMessage: ao?.errorMessage,

        taskCompletedDateTime: getISTDate(),
        status:
          fs?.errorMessage || ao?.errorMessage
            ? "Partially Completed"
            : "Completed",
        remark: "Auto enriched",
        fareAuditRemarks:"",
      },
    });
    console.log(
      `Updated log with ID ${updated.id} and status ${updated.status}`
    );
    console.log(`[ENRICH DONE] TicketID: ${log.ticketId}`);
  }

  async enrichBookingTicketAsync(log: FareAudit): Promise<void> {
    if(!log.bookingId) {
      console.log(`[ENRICH DONE] TicketID: ${log.ticketId} - Not Enriched`);
      return;
    }

    const sector = log.flightSector!;
    const flightDate = log.travelDateTime;
    const flightNumber = Number(log.flightNumber);

    const [fs, ao] = await this.orchestrator.enrichBothAsync(
      flightNumber,
      sector,
      flightDate
    );

   try {
     const updated = await prisma.fareAudit.update({
       where: { id: log.id },
       data: {
         flightSector: sector,
         travelDateTime: flightDate,

         fsSameFlightFare: fs?.sameFlightFare,
         fsLowestFlightFare: fs?.lowestFlightFare,
         fsAvailableStock: fs?.availableStock,
         fsSameFlightStock: fs?.sameFlightStock,
         fsLowestFareFlightNumber: fs?.lowestFareFlightNumber,
         fsLowestFareFlightDepartureTime: fs?.lowestFareFlightDepartureTime,
         fsAverageFare: fs?.averageFare,
         fsErrorMessage: fs?.errorMessage,

         aoSameFlightFare: ao?.sameFlightFare,
         aoLowestFare: ao?.lowestFlightFare,
         aoAverageFare: ao?.averageFare,
         aoLowestFareFlightNumber: ao?.lowestFareFlightNumber,
         aoAvailableStock: ao?.availableStock,
         aoLowestFareFlightDepartureTime: ao?.lowestFareFlightDepartureTime,
         aoSameFlightStock: ao?.sameFlightStock,
         aoErrorMessage: ao?.errorMessage,

         taskCompletedDateTime: getISTDate(),
         status:
           fs?.errorMessage || ao?.errorMessage
             ? "Partially Completed"
             : "Completed",
         remark: "Auto enriched",
         fareAuditRemarks: "",
       },
     });
      console.log(
        `Updated log with ID ${updated.id} and status ${updated.status}`
      );
   } catch (error) {
      console.error("🔥 Error during fareAudit.update:", (error as Error).message);
   }

    console.log(`[ENRICH DONE] BookingID: ${log.bookingId}`);
  }
}
