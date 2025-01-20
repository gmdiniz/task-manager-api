import { PrismaClient, Task } from "@prisma/client";
import prisma from "../clients/prismaClient";

export class TaskRepository {
  // TODO: User dto instances
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createTask(data: Omit<Task, "id">): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateTask(id: number, data: Partial<Task>): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: number): Promise<void> {
    await this.prisma.task.delete({ where: { id } });
  }

  async listTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
}
