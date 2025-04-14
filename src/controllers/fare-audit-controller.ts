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

export const logFareManage = async (req: Request, res: Response, next:NextFunction) => {
  const request: FareAuditRequestBody = req.body;

  if (request.ticketIds.length !== request.fareLogIds.length) {
    return res.status(400).json({
      status: "error",
      message: "TicketIDs and FareLogIDs are not the same count",
    });
  }

  const newLogs: string[] = [];
  const duplicateLogs: string[] = [];

  for (let i = 0; i < request.ticketIds.length; i++) {
    const ticketId = request.ticketIds[i];
    const fareLogId = request.fareLogIds[i];

    const flightDetails = await fds.getFlightDetails(
      parseInt(ticketId),
      "fare"
    );
    if (!flightDetails || !flightDetails.flightNumber) {
      console.log(
        `[❌] Flight detail or flight number missing for TicketID: ${ticketId}`
      );
      continue;
    }

    const amount = flightDetails.dailySale;
    const refund = flightDetails.dailyRefund;
    const paxConfirm = flightDetails.sectorWiseConfirmed;
    const paxReturn = flightDetails.sectorWiseReturn;
    const actualSale = amount - refund;
    const actualPaxSale = paxConfirm - paxReturn;
    const averageSale  = actualPaxSale !== 0 ? actualSale / actualPaxSale : 0;

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
      bookingId: 0, // placeholder if not present
    };

    const created = await service.logFareManageAsync(log as FareAudit);
    if (created) {
      await queue.write(created);
      newLogs.push(ticketId);
    } else {
      duplicateLogs.push(ticketId);
    }
  }

  res.json({
    status: "completed",
    added: newLogs,
    duplicates: duplicateLogs,
    message: "Bulk fare manage log processed.",
  });
};

export const logBookingTicket = async (req: Request, res: Response, next:NextFunction) => {
  const request: BookingRequestBody = req.body;

  const flightDetails = await fds.getFlightDetails(request.bookingId, "booking");
  const amount = flightDetails?.dailySale ?? 0;
  const refund = flightDetails?.dailyRefund ?? 0;
  const paxConfirm = flightDetails?.sectorWiseConfirmed ?? 0;
  const paxReturn = flightDetails?.sectorWiseReturn ?? 0;
  const actualSale = amount - refund;
  const actualPaxSale = paxConfirm - paxReturn;
  const averageSale = actualPaxSale !== 0 ? actualSale / actualPaxSale : 0;

  const log = {
    bookingId: request.bookingId,
    ticketId: request.ticketId,
    fareLogId: request.fareLogId,
    pnr: flightDetails?.pnr || null,
    flightSector: flightDetails?.sector!,
    flightNumber: flightDetails?.flightNumber.toString() || "",
    travelDateTime: flightDetails!.travelDateTime,
    flightWiseTotalSeatsPurchased: flightDetails?.flightWiseStock,
    flightWiseTotalSeatsSold: flightDetails?.flightWiseConfirmed,
    flightWiseTotalSeatsLeft: flightDetails?.flightWiseLiveQty!,
    flightWiseAverageCost: flightDetails?.flightWiseAvgCost || null,
    routeWiseSeatsPurchased: flightDetails?.sectorWiseTotalStock,
    routeWiseSeatsSold: flightDetails?.sectorWiseConfirmed,
    routeWiseSeatsLeft: flightDetails?.sectorWiseLiveQty,
    routeWiseAverageCost: flightDetails?.sectorWiseAvgCost || null,
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
    await queue.write(created);
    return res.status(200).json({
      status: "success",
      message: "BookingTicket log added and queued for enrichment.",
    });
  }

  return res.status(409).json({
    status: "duplicate",
    message: "Booking log already exists.",
  });
};
