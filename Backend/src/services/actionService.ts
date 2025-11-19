import { ActionRepository } from "../repositories/actionRepository";

export class ActionService {
  private repository: ActionRepository;

  constructor() {
    this.repository = new ActionRepository();
  }

  async list() {
    return this.repository.getAll();
  }

  async getById(id: string) {
    return this.repository.getById(id);
  }

  async create(data: any) {
    return this.repository.create(data);
  }
}