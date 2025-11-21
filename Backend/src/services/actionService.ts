import { ActionRepository } from "../repositories/actionRepository";

export class ActionService {
  private repository: ActionRepository;

  constructor() {
    this.repository = new ActionRepository();
  }

  /**
   * Lista TODAS as ações técnicas do sistema
   */
  async list() {
    return this.repository.getAll();
  }

  /**
   * Lista ações de UMA demanda específica
   * /api/actions/by-demand?demandId=UUID
   */
  async listByDemand(demandId: string) {
    return this.repository.getByDemandId(demandId);
  }

  /**
   * Busca uma ação pelo ID
   */
  async getById(id: string) {
    return this.repository.getById(id);
  }

  /**
   * Cria uma nova ação técnica
   */
  async create(data: any) {
    return this.repository.create(data);
  }
}
