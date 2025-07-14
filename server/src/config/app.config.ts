import { config } from "dotenv";

config();

export const appConfig = {
  port: parseInt(process.env.PORT ?? "3000", 10),
  jwtSecret: process.env.JWT_SECRET ?? "defaultSecret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "24h",
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS ?? "10", 10),
  basicRateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? "15", 10), // window period
    max: parseInt(process.env.RATE_LIMIT_MAX ?? "100", 10), // limiting each IP to 100 requests per window
    message:
      process.env.RATE_LIMIT_MESSAGE ??
      "Too many requests, please try again later.",
  },
  authRateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: "Too many login attempts, please try again later",
  },
  cors: {
    origin: process.env.CORS_ORIGIN ?? "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400, // 24 hours
  },
  env: process.env.NODE_ENV ?? "development",
  logLevel: process.env.LOG_LEVEL ?? "info",
  googleCred: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
};
