import axios from "axios";
import { IEnrichmentService } from "./interface";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";

let cachedToken: string | null = null;
let tokenFetchedAt: Date | null = null;
const TOKEN_EXPIRY_MINUTES = 180; // Adjust as needed

const getToken = async (): Promise<string | null> => {
  const now = new Date();

  // Reuse token if valid
  if (
    cachedToken &&
    tokenFetchedAt &&
    (now.getTime() - tokenFetchedAt.getTime()) / (1000 * 60) <
      TOKEN_EXPIRY_MINUTES
  ) {
    console.log("Using cached token");
    return cachedToken;
  }

  try {
    console.log("Getting new token...");
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

    const response = await axios.post(
      "https://airiqapi.tesepr.com/TravelAPI.svc/Login",
      data,
      config
    );

    const token = response.data?.Token;

    if (token) {
      cachedToken = token;
      tokenFetchedAt = new Date();
      console.log("New token cached at", tokenFetchedAt);
    }

    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};


export class AoEnrichmentService implements IEnrichmentService {
  async enrich(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<EnrichmentResultModel> {
    const formatDate = (date: Date): string => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const dd = String(date.getDate()).padStart(2, "0");

      return `${yyyy}${mm}${dd}`;
    };
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
    var token = await getToken();
    console.log("Token received: ", token);
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
     console.log("Origin: ", origin, "Destination: ", destination);
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
          FlightDate: formatDate(travelDateTime),
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
    console.log("Payload: ", payload);
    console.log("Config: ", config);
    try {
      const res = await axios.post(
        "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
        payload,
        config
      );
      console.log("Response: ", res.data);
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
      console.log("Total Fare Sum: ", totalFareSum);
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
