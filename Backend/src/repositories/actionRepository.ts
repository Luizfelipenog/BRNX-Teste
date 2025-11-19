import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ActionRepository {
  async getAll() {
    return prisma.action.findMany();
  }

  async getById(id: string) {
    return prisma.action.findUnique({ where: { id } });
  }

  async create(data: any) {
    return prisma.action.create({ data });
  }
}
