import { getPool } from "../../config/flightdetaildb";
import { FlightDetailResultModel } from "../../models/flight-detail-result-model";


export class FlightDetailService {
  

  async getFlightDetails(
    id: number,
    type: "fare" | "booking"
  ): Promise<FlightDetailResultModel | null> {
    const pool = await getPool();

    const whereClause =
      type === "booking" ? "WHERE SV.SaleID = @Id" : "WHERE SV.TicketID = @Id";

    const query = `
    ${
      type === "booking"
        ? `;WITH FDestCTE AS (
    SELECT FDestID, FDestName, aCode, aCode2
    FROM Config.FDestination
)`
        : ``
    }
      SELECT TOP 1
        TicketEntrySummary.DestinationID,
        ${type === "booking" ? "SV.TicketID AS TicketID," : ""}
        ${type === "booking" ? "FareLog.FareLogID AS FareLogID," : ""}
        ${
          type === "booking"
            ? `SV.FDestName AS Sector`
            : `(SELECT fdestName FROM Config.FDestination AS FD WHERE FD.FDestID = SV.FDestID) AS Sector`
        },
        ${
          type === "booking"
            ? `SV.aName`
            : `(SELECT aName FROM Config.AirLine AS AL WHERE AL.AirLineID = SV.AirLineID) AS aName`
        },
        SV.TravelDateTime,
        SV.FlightNo AS FlightNumber,
        SV.PNR,
        ${type === "booking" ? "SV.PurchaseQty" : "SV.Qty"} AS PurchaseQty,
        SV.Price AS CostPrice,
        ${type === "booking" ? "SV.PAX_Qty" : "0"} AS BookingPaxQty,
        ${
          type === "booking"
            ? "SV.FinalRate"
            : "(SELECT TOP 1 [Rate] FROM [Config].[RateChart] WHERE TicketID = SV.TicketID)"
        } AS SalePrice,
        StockSummary.FlightWiseStock,
        StockSummary.FlightWiseConfirmed,
        StockSummary.FlightWiseBlocked,
        StockSummary.FlightWiseReturn,
        StockSummary.FlightWiseLiveQty,
        StockSummary.FlightWiseAvgCost,
        StockSummary.FlightWiseLiveAvgFare,
        FDestStockSummary.SectorWiseTotalStock,
        FDestStockSummary.SectorWiseConfirmed,
        FDestStockSummary.SectorWiseBlocked,
        FDestStockSummary.SectorWiseReturn,
        FDestStockSummary.SectorWiseLiveQty,
        FDestStockSummary.SectorWiseAvgCost,
        FDestStockSummary.SectorWiseLiveAvgFare,
        SectorSaleFare.DailySale,
        DailyRefundAmount.DailyRefund,
        ${
          type === "booking"
            ? `FDestCTE.aCode + '-' + FDestCTE.aCode2 as SectorCode,
       FDestCTE.aCode as FromCode,
       FDestCTE.aCode2 as ToCode,`
            : `FDestID.aCode + '-' + FDestID.aCode2 as SectorCode,`
        }


        CASE
            WHEN EXISTS (
                SELECT 1 FROM [Config].[SectorBlock] AS BlackOut
                WHERE CONVERT(date, SV.TravelDateTime) = CONVERT(date, BlackOut.BDate)
                  AND TicketEntrySummary.DestinationID = BlackOut.FDestID
            ) THEN 1 ELSE 0
        END AS isBlackout

      FROM ${
        type === "booking" ? "dbo.SaleTicketView" : "Config.TicketEntry"
      } AS SV

      ${
        type === "booking"
          ? `LEFT JOIN FDestCTE
    ON FDestCTE.FDestName = SV.FDestName`
          : ``
      }

      OUTER APPLY (
          SELECT
              SUM(S.[Total Stock]) AS FlightWiseStock,
              SUM(S.[Confirmed]) AS FlightWiseConfirmed,
              SUM(S.[Blocked ]) AS FlightWiseBlocked,
              SUM(S.[Return]) AS FlightWiseReturn,
              SUM(S.[Qty]) AS FlightWiseLiveQty,
              AVG(S.Price) AS FlightWiseAvgCost,
              AVG(S.[FinalRate]) AS FlightWiseLiveAvgFare
          FROM dbo.StockView AS S
          WHERE S.FlightNo = SV.FlightNo
            AND S.FDestID = ${
              type === "booking"
                ? "SV.FDestName"
                : "(SELECT fdestName FROM Config.FDestination AS FD WHERE FD.FDestID = SV.FDestID)"
            }
            AND CONVERT(DATE, S.TravelDateTime) = CONVERT(DATE, SV.TravelDateTime)
      ) AS StockSummary

      OUTER APPLY (
          SELECT
              SUM(S.[Total Stock]) AS SectorWiseTotalStock,
              SUM(S.[Confirmed]) AS SectorWiseConfirmed,
              SUM(S.[Blocked ]) AS SectorWiseBlocked,
              SUM(S.[Return]) AS SectorWiseReturn,
              SUM(S.[Qty]) AS SectorWiseLiveQty,
              AVG(S.[Price]) AS SectorWiseAvgCost,
              AVG(S.[FinalRate]) AS SectorWiseLiveAvgFare
          FROM dbo.StockView AS S
          WHERE S.FDestID = ${
            type === "booking"
              ? "SV.FDestName"
              : "(SELECT fdestName FROM Config.FDestination AS FD WHERE FD.FDestID = SV.FDestID)"
          }
            AND CONVERT(DATE, S.TravelDateTime) = CONVERT(DATE, SV.TravelDateTime)
      ) AS FDestStockSummary

      OUTER APPLY (
          SELECT
              SUM(FinalRate) AS DailySale
          FROM dbo.SaleTicketView AS SV_Avg
          WHERE SV_Avg.FDestName = ${
            type === "booking"
              ? "SV.FDestName"
              : "(SELECT fdestName FROM Config.FDestination AS FD WHERE FD.FDestID = SV.FDestID)"
          }
            AND CONVERT(DATE, SV_Avg.TravelDateTime) = CONVERT(DATE, SV.TravelDateTime)
      ) AS SectorSaleFare

      OUTER APPLY (
          SELECT
              SUM(FinalRate) AS DailyRefund
          FROM dbo.TicketReturnView AS RefTable
          WHERE RefTable.FDestName = ${
            type === "booking"
              ? "SV.FDestName"
              : "(SELECT fdestName FROM Config.FDestination AS FD WHERE FD.FDestID = SV.FDestID)"
          }
            AND CONVERT(DATE, RefTable.TravelDateTime) = CONVERT(DATE, SV.TravelDateTime)
      ) AS DailyRefundAmount
      ${
        type === "booking"
          ? `
OUTER APPLY (
    SELECT TOP 1 FareLogID
    FROM [dbo].[FareLogVw] AS FL
    WHERE FL.PNR = SV.PNR
    ORDER BY FareLogID DESC
) AS FareLog
`
          : ""
      }
    
      ${
        type === "booking"
          ? `OUTER APPLY (
          SELECT
              MAX(FDestID) AS DestinationID
          FROM Config.TicketEntry
          WHERE FlightNo = SV.FlightNo
      ) AS TicketEntrySummary`
          : `OUTER APPLY (
    SELECT
        SUM(TE.Qty) AS FlightWisePurSeats,
		MAX(TE.FDestID) AS DestinationID,
		MAX(TE.TravelDateTime) AS TravelDateTime
    FROM ConfiG.TicketEntry AS TE
    WHERE TE.FlightNo = SV.FlightNo AND  TE.FDestID = (select FDestID from Config.FDestination as FD where FD.FDestID = sv.FDestID )
      AND CONVERT(DATE, TE.TravelDateTime) = CONVERT(DATE, SV.TravelDateTime)
) AS TicketEntrySummary`
      }

      LEFT JOIN Config.FDestination AS FDestID
        ON FDestID.FDestID = TicketEntrySummary.DestinationID

      ${whereClause};
    `;
    const result = await pool.request().input("Id", id).query(query);
    const row = result.recordset[0];

    if (!row) {
      console.warn(`[⚠️] No flight detail found for ${type} ID ${id}`);
      return null;
    }

    return {
      destinationId: row.DestinationID,
      ticketId: row.TicketID ?? null,
      fareLogId: row.FareLogID ?? null,
      sector: row.SectorCode,
      fromCode: row.FromCode,
      toCode: row.ToCode,
      airlineName: row.aName,
      travelDateTime: row.TravelDateTime,
      flightNumber: Number(row.FlightNumber),
      pnr: row.PNR,
      purchaseQty: row.PurchaseQty,
      costPrice: row.CostPrice,
      bookingPaxQty: row.BookingPaxQty,
      salePrice: row.SalePrice,
      flightWiseStock: row.FlightWiseStock,
      flightWiseConfirmed: row.FlightWiseConfirmed,
      flightWiseBlocked: row.FlightWiseBlocked,
      flightWiseReturned: row.FlightWiseReturn,
      flightWiseLiveQty: row.FlightWiseLiveQty,
      flightWiseAvgCost: row.FlightWiseAvgCost,
      flightWiseAvgLiveFare: row.FlightWiseLiveAvgFare,
      sectorWiseTotalStock: row.SectorWiseTotalStock,
      sectorWiseConfirmed: row.SectorWiseConfirmed,
      sectorWiseBlocked: row.SectorWiseBlocked,
      sectorWiseReturn: row.SectorWiseReturn,
      sectorWiseLiveQty: row.SectorWiseLiveQty,
      sectorWiseAvgCost: row.SectorWiseAvgCost,
      sectorWiseAvgLiveFare: row.SectorWiseLiveAvgFare,
      dailySale: row.DailySale ?? 0,
      dailyRefund: row.DailyRefund ?? 0,
      isBlackout: row.isBlackout,
    };
  }
}

export const flightDetailService = new FlightDetailService();



