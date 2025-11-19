import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class DemandRepository {
  async create(data: Prisma.DemandCreateInput) {
    return prisma.demand.create({ data });
  }

  async findAll(filter?: { status?: Prisma.DemandStatus; providerId?: string }) {
    return prisma.demand.findMany({
      where: {
        status: filter?.status,
        providerId: filter?.providerId,
      },
      include: { actions: true, provider: true },
    });
  }

  async findById(id: string) {
    return prisma.demand.findUnique({
      where: { id },
      include: { actions: true, provider: true },
    });
  }

  async update(id: string, data: Prisma.DemandUpdateInput) {
    return prisma.demand.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.demand.delete({ where: { id } });
  }
}
