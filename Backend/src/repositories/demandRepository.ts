import { PrismaClient, DemandStatus, DemandType } from "@prisma/client";

const prisma = new PrismaClient();

export class DemandRepository {
  async create(data: any) {
    return prisma.demand.create({ data });
  }

  async findAll(filters?: { status?: string; providerId?: string }) {
    return prisma.demand.findMany({
      where: {
        status: filters?.status ? filters.status as DemandStatus : undefined,
        providerId: filters?.providerId || undefined,
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
    const payload: any = {};

    if (data.status) {
      payload.status = {
        set: data.status as DemandStatus
      };
    }

    if (data.type) {
      payload.type = {
        set: data.type as DemandType
      };
    }

    return prisma.demand.update({
      where: { id },
      data: payload,
    });
  }

  async updateStatus(id: string, status: string) {
    return prisma.demand.update({
      where: { id },
      data: {
        status: {
          set: status as DemandStatus
        }
      }
    });
  }

  async delete(id: string) {
    return prisma.demand.delete({
      where: { id },
    });
  }
}
