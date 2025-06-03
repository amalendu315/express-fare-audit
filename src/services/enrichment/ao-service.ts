import axios from "axios";
import { IEnrichmentService } from "./interface";
import { parse, isValid } from "date-fns";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";


export class AoEnrichmentService implements IEnrichmentService {
  async enrich(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<EnrichmentResultModel> {
    if (!flightSector) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "Missing FlightSector or FlightDate",
        remarks: "Cannot enrich without flight info",
      };
    }
    const [origin, destination] = flightSector.split("-");
    if (!origin || !destination) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "Invalid sector format",
        remarks: "Expected format: ORIGIN-DEST",
      };
    }
     const payload = {
       Sectors: flightSector,
       FlightDate: travelDateTime.toLocaleDateString("en-US",{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).split('-').reverse().join('/'),
       FlightNumber: "", 
     };

     console.log("Enrichment Payload:", JSON.stringify(payload, null, 2));

    try {
      const res = await axios.post(
        "http://13.203.38.118:8080/B2BFareTest/Availability",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const items = res.data?.Flights?.[0]?.JourneysList?.[0]?.LIST || [];

      if (items?.length === 0) {
        return {
          sameFlightFare: 0,
          lowestFlightFare: 0,
          averageFare: 0,
          sameFlightStock: 0,
          availableStock: 0,
          lowestFareFlightNumber: null,
          lowestFareFlightDepartureTime: null,
          windowedLowestFare: null,
          windowedLowestFareFlightNumber: null,
          windowedLowestFareDepartureTime: null,
          errorMessage: "No flights found",
          remarks: "No flights found for the given sector",
        };
      }

      let sameFlightFare: number | undefined;
      let lowestFlightFare: number | undefined;
      let totalFareSum = 0;
      let totalFareCount = 0;
      let totalSeats = 0;
      let lowestFareFlightNumber: string | null = null;
      let lowestFareFlightDepartureTime: Date | null = null;
      let sameFlightSeats: number | undefined;
      let targetDepartureTime: Date | null = null;

      for (const item of items) {
        const flightData = item.AirlinetList?.[0];
        const priceList = item.PriceDetails || [];

        if (!flightData) continue;

        

        const flightNoRaw = flightData.AirlineNo || "";
        const flightNo = flightNoRaw.split(" ").pop()?.trim();
        const availSeats = parseInt(flightData.AvailSeat || "0");
        const departureDateTime = flightData.DepartureDateTime || "";
        let segmentDepartureDate: Date | null = null;
        if (departureDateTime) {
          const parsed = parse(
            departureDateTime,
            "dd MMM yyyy HH:mm",
            new Date()
          );
          segmentDepartureDate = isValid(parsed) ? parsed : null;
          targetDepartureTime = segmentDepartureDate;
        }

        for (const fare of priceList) {
          const priceDesc = fare?.Pricedescription?.[0];
          const grossAmountStr = priceDesc?.GrossAmount || "0";
          const netAmount = parseFloat(grossAmountStr);

          if (parseInt(flightNo) === flightNumber) {
            sameFlightFare ??= netAmount;
            sameFlightSeats ??= availSeats;
          }

          if (!lowestFlightFare || netAmount < lowestFlightFare) {
            lowestFlightFare = netAmount;
            lowestFareFlightNumber = flightNoRaw;
            lowestFareFlightDepartureTime = segmentDepartureDate;
          }

          totalFareSum += netAmount;
          totalFareCount++;
        }

        totalSeats += availSeats;
      }
      // Windowed lowest fare
      let windowedLowestFare: number | null = null;
      let windowedLowestFareFlightNumber: string | null = null;
      let windowedLowestFareDepartureTime: Date | null = null;
      let foundDirectFlight = false;


      if (targetDepartureTime) {
        foundDirectFlight = true;
        for (const item of items) {
          const flightData = item.AirlinetList?.[0];
          if (!flightData) continue;
          const flightNoRaw = flightData.AirlineNo || "";
          const isDirect = flightData?.Stops === 0 || flightData?.Stops === '0';
          const flightNo = flightNoRaw.split(" ").pop()?.trim();
          const departureDateTime = flightData.DepartureDateTime || "";
          let segmentDepartureDate: Date | null = null;
          if (departureDateTime) {
            const parsed = parse(
              departureDateTime,
              "dd MMM yyyy HH:mm",
              new Date()
            );
            segmentDepartureDate = isValid(parsed) ? parsed : null;
          }
          if (
            isDirect &&
            segmentDepartureDate &&
            segmentDepartureDate.getTime() >=
              targetDepartureTime.getTime() - 4 * 60 * 60 * 1000 &&
            segmentDepartureDate.getTime() <=
              targetDepartureTime.getTime() + 4 * 60 * 60 * 1000
          ) {
            const priceList = item.PriceDetails || [];
            for (const fare of priceList) {
              const priceDesc = fare?.Pricedescription?.[0];
              const grossAmountStr = priceDesc?.GrossAmount || "0";
              const netAmount = parseFloat(grossAmountStr);

              if (
                windowedLowestFare === null ||
                netAmount < windowedLowestFare
              ) {
                windowedLowestFare = netAmount;
                windowedLowestFareFlightNumber = flightNoRaw;
                windowedLowestFareDepartureTime = segmentDepartureDate;
              }
            }
          }
        }
      }
      const averageFare =
        totalFareCount > 0 ? totalFareSum / totalFareCount : 0;

        if (!foundDirectFlight) {
          return {
            sameFlightFare: sameFlightFare ?? 0,
            lowestFlightFare: lowestFlightFare ?? 0,
            sameFlightStock: sameFlightSeats ?? 0,
            averageFare: averageFare,
            availableStock: totalSeats,
            lowestFareFlightNumber: lowestFareFlightNumber ?? null,
            lowestFareFlightDepartureTime:
              lowestFareFlightDepartureTime ?? null,
            windowedLowestFare: null,
            windowedLowestFareFlightNumber: null,
            windowedLowestFareDepartureTime: null,
            errorMessage: "No direct flights found in ±4 hour window",
            remarks: "No direct flights found for windowed search",
          };
        } else {
          return {
            sameFlightFare: sameFlightFare || 0,
            lowestFlightFare: lowestFlightFare || 0,
            sameFlightStock: sameFlightSeats || 0,
            averageFare: averageFare,
            lowestFareFlightNumber: lowestFareFlightNumber ?? null,
            lowestFareFlightDepartureTime:
              lowestFareFlightDepartureTime || null,
            windowedLowestFare: windowedLowestFare || null,
            windowedLowestFareFlightNumber:
              windowedLowestFareFlightNumber || null,
            windowedLowestFareDepartureTime:
              windowedLowestFareDepartureTime || null,
            errorMessage: sameFlightFare ? "" : "Same Flight Fare Not Found",
            availableStock: totalSeats,
            remarks: "AO API Enriched",
          };
        }
      
    } catch (e: any) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: `AO API Error: ${e.message}`,
        remarks: "Enrichment Error",
      };
    }
  }
}
