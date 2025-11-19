import { ProviderRepository } from "../repositories/providerRepository";

const providerRepository = new ProviderRepository();

export class ProviderService {
  async list() {
    return providerRepository.findAll();
  }

  async getById(id: string) {
    return providerRepository.findById(id);
  }

  async create(data: any) {
    return providerRepository.create(data);
  }

  async update(id: string, data: any) {
    return providerRepository.update(id, data);
  }

  async remove(id: string) {
    return providerRepository.delete(id);
  }
}
