import "reflect-metadata";
import express, { Express } from "express";
import statusMonitor from "express-status-monitor";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index.route";
import { appConfig } from "./config/app.config";
import rateLimit from "express-rate-limit";
import { requestLogging, errorLogging } from "./middleware/logging";

const app: Express = express();

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(requestLogging);

// security middlewares
app.use(helmet());
app.use(cors(appConfig.cors));
// this.app.use(commpression())

// rate limiting middleware
const limiter = rateLimit(appConfig.rateLimit);
app.use(limiter);

// health monitoring
app.use(statusMonitor());

// API Routes
app.use("/api", routes);

// Error handling
app.use(errorLogging);

export default app;
