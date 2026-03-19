import type { NextFunction, Request, Response } from "express";

const createUser = async(
    request: Request, 
    resopnse: Response, 
    next: NextFunction
) => {
    resopnse.json({message: "User registered successfully..."});
};

export default createUser;