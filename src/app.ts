import express, {type Response, type Request, type NextFunction } from 'express'
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config.js';
import { error } from 'node:console';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

const app = express();

//Routes
app.get('/', (request, response, next) => {
    /* Throw a manual error
    const error = createHttpError(400, "Something went wrong");
    throw error;
    */
    response.json({message: "welcome to js elib"});
}); //HTTP methods: GET, POST, PUT, PATCH, DELETE 

app.use(globalErrorHandler)

export default app;