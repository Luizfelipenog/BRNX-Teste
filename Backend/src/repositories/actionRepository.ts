import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ActionRepository {
  
  /**
   * Lista TODAS as ações técnicas
   * Inclui a demanda relacionada e ordena pela data
   */
  async getAll() {
    return prisma.action.findMany({
      include: {
        demand: true
      },
      orderBy: {
        executedAt: "desc"
      }
    });
  }

  /**
   * Lista ações de UMA demanda específica
   */
  async getByDemandId(demandId: string) {
    return prisma.action.findMany({
      where: { demandId },
      include: {
        demand: true
      },
      orderBy: {
        executedAt: "desc"
      }
    });
  }

  /**
   * Busca uma única ação pelo ID
   */
  async getById(id: string) {
    return prisma.action.findUnique({
      where: { id },
      include: {
        demand: true
      }
    });
  }

  /**
   * Cria uma nova ação técnica
   */
  async create(data: any) {
    return prisma.action.create({
      data,
      include: {
        demand: true
      }
    });
  }
}
