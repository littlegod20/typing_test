import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";

export const requestLogging = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`, {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    userAgent: req.get("user-agent"),
  });
  next();
};

export const errorLogging = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message, {
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    user: (req as any).user?.id ?? "anonymous",
  });
  next(err)
};
