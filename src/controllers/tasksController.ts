import express from "express";

import RouterHandler from "../entities/routerHandler";

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

router.get("/", tasksController.getTasks);
// router.get('/:id', tasksController.getTaskById)
// router.post('/', tasksController.createTask)
// router.put('/:id', tasksController.updateTask)
// router.delete('/:id', tasksController.deleteTask)

export default router;
