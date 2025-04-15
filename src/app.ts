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
      "http://airiqapi.tesepr.com/TravelAPI.svc/Login",
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

// Start enrichment background worker
startEnrichmentWorker();

export default app;
