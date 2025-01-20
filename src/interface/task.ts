export interface ITask {
  id: number;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export class TaskDTO implements ITask {
  id: number;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;

  constructor(task: ITask) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.priority = task.priority;
    this.dueDate = task.dueDate;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
    this.userId = task.userId;
  }
}
