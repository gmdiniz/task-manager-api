import express from "express";

import RouterHandler from "../interface/routerHandler";
import verifyJWT from "../middlewrares/authenticator";

const router = express.Router();

class TaskController {
  getTasks: RouterHandler = async (req, res) => {
    try {
      res.send("All tasks listed!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const tasksController = new TaskController();

router.get("/", verifyJWT, tasksController.getTasks);
// router.get('/:id', verifyJWT, tasksController.getTaskById)
// router.post('/', verifyJWT, tasksController.createTask)
// router.put('/:id', verifyJWT, tasksController.updateTask)
// router.delete('/:id', verifyJWT, tasksController.deleteTask)

export default router;
