import { initializeDatabase } from "./config/database.config";
import app from "./app";
import { appConfig } from "./config/app.config";
import logger from "./config/logger";

const startServer = async () => {
  try {
    logger.info("Initializing database connection...");
    // database initialiazation
    initializeDatabase();

    app.listen(appConfig.port, () => {
      logger.info(
        `Server running in ${appConfig.env} mode on port ${appConfig.port}`
      );
    });
  } catch (error) {
    logger.error("Failed to start server");
    logger.error(
      error instanceof Error ? error.stack ?? error.message : String(error)
    );

    process.exit(1);
  }
};

startServer();
