import { DemandRepository } from "../repositories/demandRepository";

export class DemandService {
  private repository: DemandRepository;

  constructor() {
    this.repository = new DemandRepository();
  }

  async create(data: any) {
    return this.repository.create(data);
  }

  async list(filters: { status?: string; providerId?: string }) {
    return this.repository.list(filters);
  }

  async get(id: string) {
    return this.repository.getById(id);
  }

  async update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  async updateStatus(id: string, status: string) {
    return this.repository.updateStatus(id, status);
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }
}
