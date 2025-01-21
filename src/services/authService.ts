import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthRequest from "../interface/authRequest";

import prismaClient from "../clients/prismaClient";

const config = process.env;

export class AuthService {
  async login({
    usernameOrEmail,
    password,
  }: AuthRequest): Promise<string | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { name: usernameOrEmail }],
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    if (!config.SECRET) {
      throw new Error("SECRET environment variable is not defined");
    }

    const token = jwt.sign({ id: user.id }, config.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });

    return token;
  }
}
