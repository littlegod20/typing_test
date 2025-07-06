import { DataSource } from "typeorm";
import { config } from "dotenv";
import logger from "./logger";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASSWORD ?? "password",
  database: process.env.DB_NAME ?? "postgres",
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: [],
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    logger.info("Database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};
