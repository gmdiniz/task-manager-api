import express from "express";
import jwt from "jsonwebtoken";
import RouterHandler from "../interface/routerHandler";

const router = express.Router();

const config = process.env;

class AuthController {
  register: RouterHandler = async (req, res) => {
    try {
      res.send("User registered!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  authenticate: RouterHandler = async (req, res) => {
    try {
      if (req.body.user === "gabriel" && req.body.password === "123") {
        //TODO: implementar a busca no banco de dados

        const id = 1;

        if (!config.SECRET) {
          throw new Error("SECRET environment variable is not defined");
        }

        const token = jwt.sign({ id }, config.SECRET, {
          expiresIn: 300, // expires in 5min
        });

        return res.json({ auth: true, token: token });
      }

      res.status(500).json({ message: "Login inválido!" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.authenticate);

export default router;
