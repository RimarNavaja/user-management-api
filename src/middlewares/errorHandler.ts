import { Request, Response, NextFunction } from "express";

/**
 * Global Error Handler Middleware
 * 
 * Acts as a centralized error processor for the entire application.
 * This middleware should be registered after all other middlewares and routes.
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err.message,
  });
};
