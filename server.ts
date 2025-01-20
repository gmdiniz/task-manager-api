import express from "express";
import cors from "cors";

import pingController from "./src/controllers/pingController";
import authController from "./src/controllers/authController";
import usersController from "./src/controllers/usersController";
import tasksController from "./src/controllers/tasksController";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use("/ping", pingController);

app.use("/auth", authController);

app.use("/users", usersController);

app.use("/tasks", tasksController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
