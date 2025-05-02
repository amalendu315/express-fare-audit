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
        lowestFareFlightNumber: 0,
        lowestFareFlightDepartureTime: null,
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
        lowestFareFlightNumber: 0,
        lowestFareFlightDepartureTime: null,
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
            lowestFareFlightNumber: 0,
            lowestFareFlightDepartureTime: null,
           errorMessage: "No flights found",
           remarks: "No flights found for the given sector",
         };
       }

      let sameFlightFare: number | undefined;
      let lowestFlightFare: number | undefined;
      let totalFareSum = 0;
      let totalFareCount = 0;
      let totalSeats = 0;
      let lowestFareFlightNumber: number | null = null;
      let lowestFareFlightDepartureTime: Date | null = null;
      let sameFlightSeats: number | undefined;

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
              lowestFareFlightNumber = parseInt(flightNo);
              lowestFareFlightDepartureTime = segmentDepartureDate;
            }

            totalFareSum += netAmount;
            totalFareCount++;
          }

          totalSeats = availSeats;
      }
      console.log("Total Fare Sum: ", totalFareSum);
      const averageFare =
        totalFareCount > 0 ? totalFareSum / totalFareCount : 0;
      return {
        sameFlightFare: sameFlightFare || 0,
        lowestFlightFare: lowestFlightFare || 0,
        sameFlightStock: sameFlightSeats || 0,
        averageFare: averageFare,
        lowestFareFlightNumber: lowestFareFlightNumber ?? 0,
        lowestFareFlightDepartureTime: lowestFareFlightDepartureTime || null,
        errorMessage: sameFlightFare ? "" : "Same Flight Fare Not Found",
        availableStock: totalSeats,
        remarks: "AO API Enriched",
      };
    } catch (e: any) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: 0,
        lowestFareFlightDepartureTime: null,
        errorMessage: `AO API Error: ${e.message}`,
        remarks: "Enrichment Error",
      };
    }
  }
}
