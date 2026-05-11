import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (
  request: Request,
  resopnse: Response,
  next: NextFunction,
) => {
  //Validation -> for complex validation there are different libraries like express-validator
  const { name, email, password } = request.body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields required...");
    return next(error);
  }
  //Process

  //Response

  resopnse.json({ message: "User registered successfully" });
};

export { createUser };
