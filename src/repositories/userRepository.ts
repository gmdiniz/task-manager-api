import { PrismaClient, User as PrismaUser } from "@prisma/client";
import prisma from "../clients/prismaClient";
import bcrypt from 'bcryptjs';
import { IUser } from '../interface/user';

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createUser(data: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user: PrismaUser = await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    return user;
  }

  async getUserById(id: number): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, data: Partial<IUser>): Promise<IUser> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async listUsers(): Promise<IUser[]> {
    return this.prisma.user.findMany();
  }
}
