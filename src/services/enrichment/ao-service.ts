import axios from "axios";
import { IEnrichmentService } from "./interface";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";


const getToken = async () => {
  console.log("Getting Token...");
  const data = {
    AgentID: "AQAG051265",
    Username: "9710101010",
    Password: "348931",
  };
  const config = {
    headers: {
      Authorization: "Basic QVFBRzA1MTI2NSo5NzEwMTAxMDEwOjM0ODkzMQ==",
    },
  };
  console.log("Response initiated");
  const response = await axios.post(
    "https://airiqapi.tesepr.com/TravelAPI.svc/Login",
    data,
    config
  );
  const token = response.data?.Token;
  return token;
};
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
        averageFare: 0,
        availableStock: 0,
        errorMessage: "Missing FlightSector or FlightDate",
        remarks: "Cannot enrich without flight info",
      };
    }
    const token = await getToken();
    if (!token) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        averageFare: 0,
        availableStock: 0,
        errorMessage: "Missing Token",
        remarks: "Cannot enrich without token",
        };
    }
    const payload = {
      Sectors: flightSector,
      FlightDate:travelDateTime.toLocaleDateString("en-US",{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).split('-').reverse().join('/'),
      FlightNumber: "",
    };

    try {
      const res = await axios.post(
        "http://13.203.38.118:8080/B2BFareTest/Availability",
        payload
      );
      const list = res.data?.Flights?.[0]?.JourneysList?.[0]?.LIST;

      let sameFlightFare: number | undefined;
      let lowestFlightFare: number | undefined;
      let totalFareSum = 0;
      let totalFareCount = 0;
      let totalSeats = 0;

      for (const item of list) {
        const aoFlightNo = item.AirlinetList[0]?.AirlineNo?.split(" ").pop()?.trim();
        const availSeats = item.AvailSeat;

        for (const price of item.PriceDetails) {
          const grossAmount = parseFloat(
            price.Pricedescription?.[0]?.GrossAmount || "0"
          );
          if (aoFlightNo && parseInt(aoFlightNo) === flightNumber) {
            sameFlightFare ??= grossAmount;
          }
          if (!lowestFlightFare || grossAmount < lowestFlightFare) {
            lowestFlightFare = grossAmount;
          }

          totalFareSum += grossAmount;
          totalFareCount++;
        }

        totalSeats = parseInt(availSeats);
      }
      const averageFare = totalFareCount > 0 ? totalFareSum / totalFareCount : 0;
      return {
        sameFlightFare : sameFlightFare || 0,
        lowestFlightFare : lowestFlightFare || 0,
        averageFare: averageFare,
        availableStock: totalSeats,
        remarks: "AO API Enriched",
      };
    } catch (e: any) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        averageFare: 0,
        availableStock: 0,
        errorMessage: `AO API Error: ${e.message}`,
        remarks: "Enrichment Error",
      };
    }
  }
}
