import { Request, Response, RequestHandler, NextFunction } from "express";
import { FareAuditRequestBody } from "../models/fare-audit-request-body";
import { BookingRequestBody } from "../models/booking-request-body";
import { FareAudit } from "../models/fare-audit-model";
import { FareAuditService } from "../services/fare-audit-service";
import { enrichmentQueue } from "../services/enrichment/queue";
import { flightDetailService } from "../services/flight-detail/service";
import { Decimal } from "@prisma/client/runtime/library";

const service = new FareAuditService();
const queue = enrichmentQueue;
const fds = flightDetailService;

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}


export const logFareManage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const request: FareAuditRequestBody = req.body;

    if (request.ticketIds.length !== request.fareLogIds.length) {
      return res.status(400).json({
        status: "error",
        message: "TicketIDs and FareLogIDs are not the same count",
      });
    }

    const newLogs: string[] = [];
    const duplicateLogs: string[] = [];
    const missingFlightDetails: string[] = [];

    for (let i = 0; i < request.ticketIds.length; i++) {
      const ticketId = request.ticketIds[i];
      const fareLogId = request.fareLogIds[i];

      try {
        const flightDetails = await fds.getFlightDetails(
          parseInt(ticketId),
          "fare"
        );
        if (!flightDetails || !flightDetails.flightNumber) {
          console.warn(`[❌] Missing flight details for FareLogID: ${fareLogId}`);
          missingFlightDetails.push(fareLogId);
          continue;
        }

        const amount = flightDetails.dailySale;
        const refund = flightDetails.dailyRefund;
        const paxConfirm = flightDetails.sectorWiseConfirmed;
        const paxReturn = flightDetails.sectorWiseReturn;
        const actualSale = amount - refund;
        const actualPaxSale = paxConfirm - paxReturn;
        const averageSale =
          actualPaxSale !== 0 ? actualSale / actualPaxSale : 0;

        const log = {
          ticketId: parseInt(ticketId),
          fareLogId: parseInt(fareLogId),
          pnr: flightDetails.pnr || null,
          flightSector: flightDetails.sector!,
          flightNumber: flightDetails.flightNumber.toString(),
          travelDateTime: flightDetails.travelDateTime,
          requestDateTime: new Date(),
          flightWiseTotalSeatsPurchased: flightDetails.flightWiseStock,
          flightWiseTotalSeatsSold: flightDetails.flightWiseConfirmed,
          flightWiseTotalSeatsLeft: flightDetails.flightWiseLiveQty,
          flightWiseAverageCost: flightDetails.flightWiseAvgCost,
          routeWiseSeatsPurchased: flightDetails.sectorWiseTotalStock,
          routeWiseSeatsSold: flightDetails.sectorWiseConfirmed,
          routeWiseSeatsLeft: flightDetails.sectorWiseLiveQty,
          routeWiseAverageCost: flightDetails.sectorWiseAvgCost,
          averageSellFare: averageSale.toFixed(2) as unknown as Decimal,
          logType: "fare",
          status: "Pending",
          source: "Internal Software",
          remark: "Log received",
          taskCompletedDateTime: new Date(),
          bookingId: 0,
        };

        const created = await service.logFareManageAsync(log as FareAudit);
        if (created) {
          queue.write(created)
          newLogs.push(fareLogId);
        } else {
          duplicateLogs.push(fareLogId);
        }
      } catch (innerErr) {
        console.error(
          `[Error] Failed to process TicketID ${ticketId}:`,
          innerErr
        );
      }
    }

    return res.json({
      status: "completed",
      added: newLogs,
      duplicates: duplicateLogs,
      missingFlightDetails,
      message: `Bulk fare manage log processed.${missingFlightDetails.length > 0 ? " Missing flight details for some tickets." : ""}`,
    });
  } catch (error) {
    console.error("Error in logFareManage controller:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error. Please try again later.",
    });
  }
};


// export const logFareManage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const request: FareAuditRequestBody = req.body;

//     if (request.ticketIds.length !== request.fareLogIds.length) {
//       return res.status(400).json({
//         status: "error",
//         message: "TicketIDs and FareLogIDs are not the same count",
//       });
//     }

//     const ticketIds = request.ticketIds.map(Number);
//     const fareLogIds = request.fareLogIds.map(Number);

//     const newLogs: string[] = [];
//     const duplicateLogs: string[] = [];
//     const missingFlightDetails: string[] = [];

//     const ticketChunks = chunkArray(ticketIds, 1000);
//     const fareLogChunks = chunkArray(fareLogIds, 1000);

//     for (let chunkIndex = 0; chunkIndex < ticketChunks.length; chunkIndex++) {
//       const chunk = ticketChunks[chunkIndex];
//       const fareChunk = fareLogChunks[chunkIndex];

//       const flightDetailsMap = await fds.getFlightDetailsBulk(chunk, "fare");

//       for (let i = 0; i < chunk.length; i++) {
//         const ticketId = chunk[i];
//         const fareLogId = fareChunk[i];

//         try {
//           const flightDetails = flightDetailsMap.get(ticketId);

//           if (!flightDetails || !flightDetails.flightNumber) {
//             console.warn(
//               `[❌] Missing flight details for FareLogID: ${fareLogId}`
//             );
//             missingFlightDetails.push(fareLogId.toString());
//             continue;
//           }

//           const amount = flightDetails.dailySale ?? 0;
//           const refund = flightDetails.dailyRefund ?? 0;
//           const paxConfirm = flightDetails.sectorWiseConfirmed ?? 0;
//           const paxReturn = flightDetails.sectorWiseReturn ?? 0;
//           const actualSale = amount - refund;
//           const actualPaxSale = paxConfirm - paxReturn;
//           const averageSale =
//             actualPaxSale !== 0 ? actualSale / actualPaxSale : 0;

//           const log = {
//             ticketId,
//             fareLogId,
//             pnr: flightDetails.pnr || null,
//             flightSector: flightDetails.sector!,
//             flightNumber: flightDetails.flightNumber.toString(),
//             travelDateTime: flightDetails.travelDateTime,
//             requestDateTime: new Date(),
//             flightWiseTotalSeatsPurchased: flightDetails.flightWiseStock,
//             flightWiseTotalSeatsSold: flightDetails.flightWiseConfirmed,
//             flightWiseTotalSeatsLeft: flightDetails.flightWiseLiveQty,
//             flightWiseAverageCost: flightDetails.flightWiseAvgCost,
//             routeWiseSeatsPurchased: flightDetails.sectorWiseTotalStock,
//             routeWiseSeatsSold: flightDetails.sectorWiseConfirmed,
//             routeWiseSeatsLeft: flightDetails.sectorWiseLiveQty,
//             routeWiseAverageCost: flightDetails.sectorWiseAvgCost,
//             averageSellFare: averageSale.toFixed(2) as unknown as Decimal,
//             logType: "fare",
//             status: "Pending",
//             source: "Internal Software",
//             remark: "Log received",
//             taskCompletedDateTime: new Date(),
//             bookingId: 0,
//           };

//           const created = await service.logFareManageAsync(log as FareAudit);
//           if (created) {
//             queue.write(created);
//             newLogs.push(fareLogId.toString());
//           } else {
//             duplicateLogs.push(fareLogId.toString());
//           }
//         } catch (err) {
//           console.error(`[Error] Failed to process TicketID ${ticketId}:`, err);
//         }
//       }
//     }

//     return res.json({
//       status: "completed",
//       added: newLogs,
//       duplicates: duplicateLogs,
//       missingFlightDetails,
//       message: `Bulk fare manage log processed.${
//         missingFlightDetails.length > 0
//           ? " Missing flight details for some tickets."
//           : ""
//       }`,
//     });
//   } catch (error) {
//     console.error("Error in logFareManage controller:", error);
//     return res.status(500).json({
//       status: "error",
//       message: "Internal server error. Please try again later.",
//     });
//   }
// };

export const logBookingTicket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const request: BookingRequestBody = req.body;

    const flightDetails = await fds.getFlightDetails(
      request.bookingId,
      "booking"
    );
    if (!flightDetails || !flightDetails.flightNumber) {
      return res.status(404).json({
        status: "error",
        message: "Flight details not found for this booking.",
      });
    }

    const amount = flightDetails.dailySale ?? 0;
    const refund = flightDetails.dailyRefund ?? 0;
    const paxConfirm = flightDetails.sectorWiseConfirmed ?? 0;
    const paxReturn = flightDetails.sectorWiseReturn ?? 0;
    const actualSale = amount - refund;
    const actualPaxSale = paxConfirm - paxReturn;
    const averageSale = actualPaxSale !== 0 ? actualSale / actualPaxSale : 0;

    const log = {
      bookingId: request.bookingId,
      ticketId: flightDetails.ticketId,
      fareLogId: flightDetails.fareLogId,
      pnr: flightDetails.pnr || null,
      flightSector: flightDetails.sector!,
      flightNumber: flightDetails.flightNumber.toString() || "",
      travelDateTime: flightDetails.travelDateTime,
      flightWiseTotalSeatsPurchased: flightDetails.flightWiseStock,
      flightWiseTotalSeatsSold: flightDetails.flightWiseConfirmed,
      flightWiseTotalSeatsLeft: flightDetails.flightWiseLiveQty!,
      flightWiseAverageCost: flightDetails.flightWiseAvgCost || null,
      routeWiseSeatsPurchased: flightDetails.sectorWiseTotalStock,
      routeWiseSeatsSold: flightDetails.sectorWiseConfirmed,
      routeWiseSeatsLeft: flightDetails.sectorWiseLiveQty,
      routeWiseAverageCost: flightDetails.sectorWiseAvgCost || null,
      averageSellFare: averageSale as unknown as Decimal,
      requestDateTime: new Date(),
      status: "Pending",
      logType: "booking",
      source: request.source,
      remark: "Log received",
      taskCompletedDateTime: new Date(),
      id: 0,
    };

    const created = await service.logBookingTicketAsync(log as FareAudit);
    if (created) {
      queue.write(created)
      return res.status(200).json({
        status: "success",
        message: "BookingTicket log added and queued for enrichment.",
      });
    }

    return res.status(409).json({
      status: "duplicate",
      message: "Booking log already exists.",
    });
  } catch (error) {
    console.error("Error in logBookingTicket controller:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error. Please try again later.",
    });
  }
};

