import express from "express";
import jwt from "jsonwebtoken";
import RouterHandler from "../interface/routerHandler";
import AuthRequest from "../interface/authRequest";

import { AuthService } from "../services/authService";

const router = express.Router();

const config = process.env;

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  authenticate: RouterHandler = async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;

      if (!usernameOrEmail || !password) {
        return res
          .status(400)
          .json({ message: "Username or email and password are required" });
      }

      const token = await this.authService.login({
        usernameOrEmail,
        password,
      } as AuthRequest);

      return token
        ? res.status(200).json({ auth: true, token: token })
        : res.status(500).json({ message: "Invalid login!" });
    } catch (error) {
      console.error(error);

      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).send({ message: "Internal Server Error", error: errorMessage });
    }
  };
}

const authController = new AuthController();

router.post("/login", authController.authenticate);

export default router;
