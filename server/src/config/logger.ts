import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import { appConfig } from "./app.config";

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Custom log format for console
const consoleFormat = printf(
  ({ level, message, timestamp, stack, ...meta }) => {
    let log = `${timestamp} [${level}]: ${stack ?? message}`;
    if (Object.keys(meta).length > 0) {
      log += ` ${JSON.stringify(meta)}`;
    }
    return log;
  }
);

// Custom log format for files
const fileFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
  const log = {
    timestamp,
    level,
    message,
    stack,
    ...meta,
  };
  return JSON.stringify(log);
});

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// creating a logger
const logger = winston.createLogger({
  level: appConfig.logLevel,
  levels,
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true })
  ),
  transports: [
    // Console transport (colorized, simple format)
    new winston.transports.Console({
      format: combine(colorize(), consoleFormat),
    }),

    // Daily rotating file transport for all logs
    new DailyRotateFile({
      filename: path.join(__dirname, "../../logs/application-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "30d",
      format: fileFormat,
    }),

    // Separate error logs
    new DailyRotateFile({
      level: "error",
      filename: path.join(__dirname, "../../logs/error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "30d",
      format: fileFormat,
    }),
  ],

  exceptionHandlers: [
    new DailyRotateFile({
      filename: path.join(__dirname, "../../logs/exceptions-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "30d",
      format: fileFormat,
    }),
  ],
});

export default logger;
