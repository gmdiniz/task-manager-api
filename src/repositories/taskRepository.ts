import { Task as PrismaTask } from "@prisma/client";
import { ITask } from "../interface/task";
import { TaskDTO } from "../interface/task";

import prisma from "../clients/prismaClient";

export class TaskRepository {
  async createTask(data: Omit<ITask, "id">): Promise<PrismaTask> {
    const createdTask = await prisma.task.create({ data });

    return new TaskDTO(createdTask);
  }

  async getTaskById(id: number): Promise<PrismaTask | null> {
    const task = await prisma.task.findUnique({ where: { id } });

    return task ? new TaskDTO(task) : null;
  }

  async updateTask(id: number, data: Partial<ITask>): Promise<PrismaTask> {
    const updatedTask = await prisma.task.update({ where: { id }, data });

    return new TaskDTO(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    await prisma.task.delete({ where: { id } });
  }

  async listTasks(): Promise<PrismaTask[]> {
    const tasks = await prisma.task.findMany();

    return tasks.map((task) => new TaskDTO(task));
  }
}
