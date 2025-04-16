import express from "express";
import dotenv from "dotenv";
import fareAuditRoutes from "./routes/fare-audit-routes"; // your audit endpoints
import { startEnrichmentWorker } from "./services/enrichment/worker";
import axios from "axios";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Body parser

// API Routes
app.use("/api", fareAuditRoutes);
app.post("/login", async (req, res) => {
  try {
    console.log("Login Started")
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
    console.log("Response initiated")
    const response = await axios.post(
      "https://airiqapi.tesepr.com/TravelAPI.svc/Login",
      data,
      config
    );
    console.log("Response:", response.data); // Log the response data
    res.json(response.data);
  } catch (error) {
    // Handle any errors
    console.error("Error making the API request:", error);
    res.status(500).send("An error occurred");
  }
});

app.post("/V0/Availability", async (req, res) => {
  const { DepartureStation, ArrivalStation, FlightDate, OnlyDirectFlight } = req.body;

  console.log(req.body);

  // Fixed token format with your given token string
  const token =
    "R1BGbzEwTURrZFRsYlFoQVd6aWtnQ1FabmZiaFB2dzlhdFNBWnAwbzNtTVdXWi9LMkdOS0trSDI5dDdDWHJaY1QyYmJTNDFPb2tjRTRJQjFVa05WZSstVFZsZklCRzVXemRNNXhBQnhFd0VRajFrWFE4UllaWXdKOEVYL1RoMjl2cEo1QVJsSkxUZFlnU2QrLXBTamtIcXVIUjRLV3I3b0RFOGpVNVhXbUxxNXU0NE9GVXNYOFgvZm14Q3N5a3VabHFRVjRPdXdYd2M3SGhzTHFwNFZrRlNnK0FEMEFQUS0=";

  // Constructing data object directly without using dataTemplate
  const data = {
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
        DepartureStation: DepartureStation,
        ArrivalStation: ArrivalStation,
        FlightDate: FlightDate,
        FarecabinOption: "E",
        FareType: "N",
        OnlyDirectFlight: OnlyDirectFlight,
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
    console.log(
      "NEW EndPoint Log:",
      JSON.stringify(data?.AvailInfo, null, 2),
      JSON.stringify(config, null, 2)
    );

    const response = await axios.post(
      "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
      data,
      config
    );
    res.json(response.data); // Send data to client
  } catch (error) {
    console.error("Error fetching availability:", (error as Error).message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching flight availability." });
  }
});

// Start enrichment background worker
startEnrichmentWorker();

export default app;
