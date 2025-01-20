import { Request, Response, NextFunction } from "express";
import CustomRequest from "./customRequest";

type RouterHandler = (
  req: CustomRequest,
  res: Response,
  next?: NextFunction
) => void;

export default RouterHandler;
