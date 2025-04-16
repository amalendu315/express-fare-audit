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

// Start enrichment background worker
startEnrichmentWorker();

export default app;
