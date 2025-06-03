import axios from "axios";
import crypto from "crypto";
import { IEnrichmentService } from "./interface";
import { parse, isValid } from "date-fns";
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
        sameFlightStock: 0,
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
        averageFare: 0,
        sameFlightStock: 0,
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
      if (flights?.length === 0) {
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

      if (flights === null || flights === undefined) {
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
      let lowestFare: number | undefined;
      let totalFare = 0;
      let fareCount = 0;
      let totalSeats = 0;
      let sameFlightSeats: number | undefined;
      let lowestFareFlightNumber: string | null = null;
      let lowestFareFlightDepartureTime: Date | null = null;
      let targetDepartureTime: Date | null = null;

      for (const flight of flights) {
        const segmentFlightNumber = flight.Segments?.[0]?.Flight_Number;
        const airlineCode = flight.Segments?.[0]?.Airline_Code;
        const fullFlightNumber = `${airlineCode} ${segmentFlightNumber}`;
        const segmentDepartureTime = flight.Segments?.[0]?.Departure_DateTime;
        let segmentDepartureDate: Date | null = null;
        if (segmentDepartureTime) {
          const parsed = parse(
            segmentDepartureTime,
            "MM/dd/yyyy HH:mm",
            new Date()
          );
          segmentDepartureDate = isValid(parsed) ? parsed : null;
          targetDepartureTime = segmentDepartureDate;
        }
        const fares = flight.Fares;

        for (const fare of fares) {
          const totalAmount = fare.FareDetails?.[0]?.Total_Amount;
          const seats = fare?.Seats_Available;
          totalSeats += parseInt(seats) || 0;
          if (segmentFlightNumber === String(flightNumber)) {
            sameFlightFare ??= totalAmount;
            sameFlightSeats ??= parseInt(seats);
          }

          if (!lowestFare || totalAmount < lowestFare) {
            lowestFare = totalAmount;
            lowestFareFlightNumber = fullFlightNumber;
            lowestFareFlightDepartureTime = segmentDepartureDate;
          }

          totalFare += totalAmount;
          fareCount++;
        }
      }
      // Step 2: Windowed lowest fare
      let windowedLowestFare: number | null = null;
      let windowedLowestFareFlightNumber: string | null = null;
      let windowedLowestFareDepartureTime: Date | null = null;

      if (targetDepartureTime) {
        for (const flight of flights) {
          const segmentFlightNumber = flight.Segments?.[0]?.Flight_Number;
          const airlineCode = flight.Segments?.[0]?.Airline_Code;
          const fullFlightNumber = `${airlineCode} ${segmentFlightNumber}`;
          const segmentDepartureTime = flight.Segments?.[0]?.Departure_DateTime;
          let segmentDepartureDate: Date | null = null;
          if (segmentDepartureTime) {
            const parsed = parse(
              segmentDepartureTime,
              "MM/dd/yyyy HH:mm",
              new Date()
            );
            segmentDepartureDate = isValid(parsed) ? parsed : null;
          }
          if (
            segmentDepartureDate &&
            segmentDepartureDate.getTime() >=
              targetDepartureTime.getTime() - 4 * 60 * 60 * 1000 &&
            segmentDepartureDate.getTime() <=
              targetDepartureTime.getTime() + 4 * 60 * 60 * 1000
          ) {
            for (const fare of flight.Fares) {
              const totalAmount = fare.FareDetails?.[0]?.Total_Amount;
              if (
                windowedLowestFare === null ||
                totalAmount < windowedLowestFare
              ) {
                windowedLowestFare = totalAmount;
                windowedLowestFareFlightNumber = fullFlightNumber;
                windowedLowestFareDepartureTime = segmentDepartureDate;
              }
            }
          }
        }
      }

      return {
        sameFlightFare: sameFlightFare ?? 0,
        lowestFlightFare: lowestFare ?? 0,
        sameFlightStock: sameFlightSeats ?? 0,
        averageFare: fareCount > 0 ? totalFare / fareCount : 0,
        availableStock: totalSeats,
        lowestFareFlightNumber: lowestFareFlightNumber ?? null,
        lowestFareFlightDepartureTime: lowestFareFlightDepartureTime ?? null,
        windowedLowestFare: windowedLowestFare ?? lowestFare ?? null,
        windowedLowestFareFlightNumber: windowedLowestFareFlightNumber ?? lowestFareFlightNumber ?? null,
        windowedLowestFareDepartureTime: windowedLowestFareDepartureTime ?? lowestFareFlightDepartureTime ?? null,
        errorMessage: sameFlightFare ? "" : "Same Flight Fare Not Found",
        remarks: "FS API Enriched",
      };
    } catch (e: any) {
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
        errorMessage: `FS API Error: ${e.message}`,
        remarks: "Enrichment Error",
      };
    }
  }
}
