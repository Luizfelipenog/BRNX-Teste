import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DemandRepository {
  async create(data: any) {
    return prisma.demand.create({
      data,
    });
  }

  async findAll(filters?: { status?: string; providerId?: string }) {
    return prisma.demand.findMany({
      where: {
        status: filters?.status,
        providerId: filters?.providerId,
      },
      include: {
        actions: true,
        provider: true,
      },
    });
  }

  async findById(id: string) {
    return prisma.demand.findUnique({
      where: { id },
      include: {
        actions: true,
        provider: true,
      },
    });
  }

  async update(id: string, data: any) {
    return prisma.demand.update({
      where: { id },
      data,
    });
  }

  async updateStatus(id: string, status: string) {
    return prisma.demand.update({
      where: { id },
      data: { status },
    });
  }

  async delete(id: string) {
    return prisma.demand.delete({
      where: { id },
    });
  }
}
