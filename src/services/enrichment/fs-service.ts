import axios from "axios";
import crypto from "crypto";
import { IEnrichmentService } from "./interface";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";

export class FsEnrichmentService implements IEnrichmentService {
  async enrich(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<EnrichmentResultModel> {
    if (!flightSector) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        averageFare: 0,
        availableStock: 0,
        errorMessage: "Missing FlightSector or FlightDate",
        remarks: "Cannot enrich without flight info",
      };
    }

    const [origin, destination] = flightSector.split("-");
    if (!origin || !destination) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        averageFare: 0,
        availableStock: 0,
        errorMessage: "Invalid sector format",
        remarks: "Expected format: ORIGIN-DEST",
      };
    }

    const requestPayload = {
      Auth_Header: {
        UserId: "airiq",
        Password: "24A9D8CA25DBCFEE4199A3E5F88361EF5E723AEF",
        Request_Id: crypto.randomUUID(),
        IP_Address: "127.0.0.1",
        IMEI_Number: "2232323232326",
      },
      Travel_Type: 0,
      Booking_Type: 0,
      TripInfo: [
        {
          Origin: origin,
          Destination: destination,
          TravelDate: travelDateTime.toLocaleDateString("en-US",{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).split('-').reverse().join('/'),
          Trip_Id: 0,
        },
      ],
      Adult_Count: 1,
      Child_Count: 0,
      Infant_Count: 0,
      Class_Of_Travel: 0,
      InventoryType: 0,
      Filtered_Airline: [{ Airline_Code: "" }],
    };

    try {
      const res = await axios.post(
        "https://apist.justclicknpay.com/flight/AirAPIService.svc/JSONService/Air_Search",
        requestPayload
      );
      const flights = res.data?.TripDetails?.[0]?.Flights;

      let sameFlightFare: number | undefined;
      let lowestFare: number | undefined;
      let totalFare = 0;
      let fareCount = 0;
      let totalSeats = 0;

      for (const flight of flights) {
        const segmentFlightNumber = flight.Segments?.[0]?.Flight_Number;
        const fares = flight.Fares;

        for (const fare of fares) {
          const totalAmount = fare.FareDetails?.[0]?.Total_Amount;
          const seats = fare?.Seats_Available;
          totalSeats = parseInt(seats) || 0;

          const clean = (fn: string) => fn.replace(/\D/g, "");
          if (clean(segmentFlightNumber) === String(flightNumber)) {
            sameFlightFare ??= totalAmount;
          }

          if (!lowestFare || totalAmount < lowestFare) {
            lowestFare = totalAmount;
          }

          totalFare += totalAmount;
          fareCount++;
        }
      }

      return {
        sameFlightFare : sameFlightFare ?? 0,
        lowestFlightFare: lowestFare ?? 0,
        averageFare: fareCount > 0 ? totalFare / fareCount : 0,
        availableStock: totalSeats,
        remarks: "FS API Enriched",
      };
    } catch (e: any) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        averageFare: 0,
        availableStock: 0,
        errorMessage: `FS API Error: ${e.message}`,
        remarks: "Enrichment Error",
      };
    }
  }
}
