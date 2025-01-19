import { Request, Response, NextFunction } from "express";

type RouterHandler = (req: Request, res: Response, next?: NextFunction) => void;

export default RouterHandler;
