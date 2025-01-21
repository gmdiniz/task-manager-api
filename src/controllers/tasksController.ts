import express from "express";

import RouterHandler from "../interface/routerHandler";
import verifyJWT from "../middlewrares/authenticator";

import { TaskService } from "../services/taskService";

const router = express.Router();

class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  getTasks: RouterHandler = async (req, res) => {
    try {
      const tasks = await this.taskService.listTasks();

      res.status(200).send({ tasks });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  createTask: RouterHandler = async (req, res) => {
    try {
      const task = await this.taskService.createTask(req.body);

      res.status(201).send({ message: "Task created successfully", task });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  deleteTask: RouterHandler = async (req, res) => {
    try {
      await this.taskService.deleteTask(Number(req.params.id));

      res.status(200).send({ message: "Task deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  getTaskById: RouterHandler = async (req, res) => {
    try {
      const task = await this.taskService.getTaskById(Number(req.params.id));

      res.status(200).send({ task });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  updateTask: RouterHandler = async (req, res) => {
    try {
      const task = await this.taskService.updateTask(
        Number(req.params.id),
        req.body
      );

      res.status(200).send({ message: "Task updated successfully", task });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const tasksController = new TaskController();

router.get("/", verifyJWT, tasksController.getTasks);
router.get("/:id", verifyJWT, tasksController.getTaskById);
router.post("/", verifyJWT, tasksController.createTask);
router.put("/:id", verifyJWT, tasksController.updateTask);
router.delete("/:id", verifyJWT, tasksController.deleteTask);

export default router;
