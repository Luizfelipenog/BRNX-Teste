import { prisma } from '../config/database';

export const actionRepository = {
  create(data: { demandId: string; description: string; technician: string }) {
    return prisma.action.create({ data });
  },
  listByDemand(demandId: string) {
    return prisma.action.findMany({
      where: { demandId },
      orderBy: { executedAt: 'desc' }
    });
  },
  remove(id: string) {
    return prisma.action.delete({ where: { id } });
  }
};
