import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class ProviderRepository {
  async create(data: Prisma.ProviderCreateInput) {
    return prisma.provider.create({ data });
  }

  async findAll() {
    return prisma.provider.findMany({ include: { demands: true } });
  }

  async findById(id: string) {
    return prisma.provider.findUnique({
      where: { id },
      include: { demands: true },
    });
  }

  async update(id: string, data: Prisma.ProviderUpdateInput) {
    return prisma.provider.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.provider.delete({ where: { id } });
  }
}
