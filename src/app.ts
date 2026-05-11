import express, {
  type Response,
  type Request,
  type NextFunction,
} from "express";
import { error } from "node:console";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./user/userRouter.js";
import { request } from "node:http";

const app = express();

app.use(express.json());

//Routes
app.get("/", (request, response, next) => {
  /* Throw a manual error
    const error = createHttpError(400, "Something went wrong");
    throw error;
    */
  response.json({ message: "welcome to js elib" });
}); //HTTP methods: GET, POST, PUT, PATCH, DELETE

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
