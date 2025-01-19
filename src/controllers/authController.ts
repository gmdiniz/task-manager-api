import express from "express";

import RouterHandler from "../entities/routerHandler";

const router = express.Router();

class AuthController {
  register: RouterHandler = async (req, res) => {
    try {
      res.send("User registered!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const authController = new AuthController();

router.post("/register", authController.register);
// router.post('/login', authController.authenticate);

export default router;
