import express from "express";
import verifyJWT from "../middlewrares/authenticator";
import RouterHandler from "../interface/routerHandler";

const router = express.Router();

class UserController {
  getUserById: RouterHandler = async (req, res) => {
    try {
      res.send("User found!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const usersController = new UserController();

router.get("/:id", verifyJWT, usersController.getUserById);

export default router;
