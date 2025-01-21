import { User as PrismaUser } from "@prisma/client";
import { IUser, UserDTO } from "../interface/user";

import prisma from "../clients/prismaClient";
import bcrypt from "bcryptjs";

export class UserRepository {
  async createUser(
    data: Omit<IUser, "id" | "createdAt" | "updatedAt">
  ): Promise<PrismaUser> {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user: PrismaUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return new UserDTO(user);
  }

  async getUserById(id: number): Promise<PrismaUser | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, data: Partial<IUser>): Promise<PrismaUser> {
    return prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<void> {
    // Delete related records in other tables first
    await prisma.task.deleteMany({ where: { userId: id } });
    
    await prisma.user.delete({ where: { id } });
  }

  async listUsers(): Promise<PrismaUser[]> {
    return prisma.user.findMany();
  }
}
