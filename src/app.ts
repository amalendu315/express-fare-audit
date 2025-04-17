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

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

app.get("/health", (req, res) => res.send("OK"));


// Start enrichment background worker
startEnrichmentWorker();

export default app;
