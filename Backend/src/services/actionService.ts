import { ActionRepository } from "../repositories/actionRepository";

export class ActionService {
  private repository: ActionRepository;

  constructor() {
    this.repository = new ActionRepository();
  }

  async getAllActions() {
    return this.repository.getAll();
  }

  async getActionById(id: string) {
    return this.repository.getById(id);
  }

  async createAction(data: any) {
    return this.repository.create(data);
  }
}
