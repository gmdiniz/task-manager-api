import { TaskRepository } from "../repositories/taskRepository";
import { ITask } from "../interface/task";

const taskRepository = new TaskRepository();

export class TaskService {
  async createTask(data: Omit<ITask, "id">): Promise<ITask> {
    return taskRepository.createTask(data);
  }

  async getTaskById(id: number): Promise<ITask | null> {
    return taskRepository.getTaskById(id);
  }

  async updateTask(id: number, data: Partial<ITask>): Promise<ITask> {
    return taskRepository.updateTask(id, data);
  }

  async deleteTask(id: number): Promise<void> {
    return taskRepository.deleteTask(id);
  }

  async listTasks(): Promise<ITask[]> {
    return taskRepository.listTasks();
  }
}
