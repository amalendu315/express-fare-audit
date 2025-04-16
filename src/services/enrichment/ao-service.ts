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
    const payload = {
      AgentInfo: {
        AgentId: "AQAG051265",
        UserName: "9710101010",
        AppType: "API",
        Version: "V1.0",
      },
      TripType: "O",
      AirlineID: "",
      AvailInfo: [
        {
          DepartureStation: origin,
          ArrivalStation: destination,
          FlightDate: travelDateTime,
          FarecabinOption: "E",
          FareType: "N",
          OnlyDirectFlight: false,
        },
      ],
      PassengersInfo: {
        AdultCount: "1",
        ChildCount: "0",
        InfantCount: "0",
      },
    };

    const config = { headers: { TOKEN: token } };

    try {
      const res = await axios.post(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
        payload,
        config
      );
      const items = res.data?.ItineraryFlightList?.[0]?.Items || [];;

      let sameFlightFare: number | undefined;
      let lowestFlightFare: number | undefined;
      let totalFareSum = 0;
      let totalFareCount = 0;
      let totalSeats = 0;

      for (const item of items) {
        const flightNo = item.FlightDetails?.[0]?.FlightNumber.split(" ").pop();
        const availSeats = parseInt(item.FlightDetails?.[0]?.AvailSeat || "0");

        for (const fare of item.Fares || []) {
          const netAmount = parseFloat(
            fare.Faredescription?.[0]?.NetAmount || "0"
          );

          if (parseInt(flightNo) === flightNumber) {
            sameFlightFare ??= netAmount;
          }

          if (!lowestFlightFare || netAmount < lowestFlightFare) {
            lowestFlightFare = netAmount;
          }

          totalFareSum += netAmount;
          totalFareCount++;
        }

        totalSeats = availSeats;
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
