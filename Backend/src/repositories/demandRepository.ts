import { prisma } from '../config/database';
import { Demand, DemandStatus, DemandType } from '@prisma/client';

export const demandRepository = {
  create(data: {
    providerId: string; title: string; description: string;
    type: DemandType; status?: DemandStatus
  }) {
    return prisma.demand.create({ data });
  },
  list(filters?: { status?: DemandStatus; providerId?: string }) {
    return prisma.demand.findMany({
      where: {
        status: filters?.status,
        providerId: filters?.providerId
      },
      include: { provider: true },
      orderBy: { createdAt: 'desc' }
    });
  },
  get(id: string) {
    return prisma.demand.findUnique({
      where: { id },
      include: { provider: true, actions: { orderBy: { executedAt: 'desc' } } }
    });
  },
  update(id: string, data: Partial<Demand>) {
    return prisma.demand.update({ where: { id }, data });
  },
  remove(id: string) {
    return prisma.demand.delete({ where: { id } });
  }
};
