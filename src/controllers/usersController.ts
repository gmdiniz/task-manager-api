import express from "express";
import verifyJWT from "../middlewrares/authenticator";
import RouterHandler from "../interface/routerHandler";

import { UserService } from "../services/userService";

const router = express.Router();

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUserById: RouterHandler = async (req, res) => {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));

      return res.status(200).send({ user });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  createUser: RouterHandler = async (req, res) => {
    try {
      await this.userService.createUser(req.body);

      return res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  deleteUser: RouterHandler = async (req, res) => {
    try {
      await this.userService.deleteUser(Number(req.params.id));

      return res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

const usersController = new UserController();

router.get("/:id", verifyJWT, usersController.getUserById);
router.post("/", verifyJWT, usersController.createUser);
router.delete("/:id", verifyJWT, usersController.deleteUser);

export default router;
