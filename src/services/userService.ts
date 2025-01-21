import { UserRepository } from "../repositories/userRepository";
import { IUser } from "../interface/user";

const userRepository = new UserRepository();

export class UserService {
  async createUser(
    data: Omit<IUser, "id" | "createdAt" | "updatedAt">
  ): Promise<IUser> {
    return userRepository.createUser(data);
  }

  async getUserById(id: number): Promise<IUser | null> {
    return userRepository.getUserById(id);
  }

  async updateUser(id: number, data: Partial<IUser>): Promise<IUser> {
    return userRepository.updateUser(id, data);
  }

  async deleteUser(id: number): Promise<void> {
    return userRepository.deleteUser(id);
  }

  async listUsers(): Promise<IUser[]> {
    return userRepository.listUsers();
  }
}
