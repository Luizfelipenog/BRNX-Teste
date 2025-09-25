import { prisma } from '../config/database';
import { Provider } from '@prisma/client';

export const providerRepository = {
  create(data: Omit<Provider, 'id' | 'createdAt'>) {
    return prisma.provider.create({ data });
  },
  list() {
    return prisma.provider.findMany({ orderBy: { createdAt: 'desc' } });
  },
  get(id: string) {
    return prisma.provider.findUnique({ where: { id } });
  },
  update(id: string, data: Partial<Provider>) {
    return prisma.provider.update({ where: { id }, data });
  },
  remove(id: string) {
    return prisma.provider.delete({ where: { id } });
  }
};
