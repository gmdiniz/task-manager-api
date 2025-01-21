import { Request } from "express";

interface CustomRequest extends Request {
  userId?: number;
  username?: string;
  password?: string;
}

export default CustomRequest;
