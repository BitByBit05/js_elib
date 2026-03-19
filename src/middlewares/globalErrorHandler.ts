import type { HttpError } from "http-errors";
import app from "../app.js";
import express, { type Response, type Request, type NextFunction } from 'express'
import { config } from "../config/config.js";

const globalErrorHandler = (
    err: HttpError, 
    request: Request, 
    response: Response, 
    next: NextFunction
) => {
    const statusCode = err.statusCode || 500;

    return response.status(statusCode).json({
        message: err.message,
        errorStack: config.env === 'development' ? err.stack : "",
    });
};

export default globalErrorHandler;