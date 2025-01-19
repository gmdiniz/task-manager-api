import express from "express";

import RouterHandler from "../entities/routerHandler";

const router = express.Router();

class PingController {
  ping: RouterHandler = async (req, res) => {
    try {
      res.send("Pong!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const pingController = new PingController();

router.get("/", pingController.ping);

export default router;
