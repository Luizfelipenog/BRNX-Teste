import { DemandRepository } from "../repositories/demandRepository";
import { ActionRepository } from "../repositories/actionRepository";

export class DemandService {
  private repository: DemandRepository;
  private actionRepo: ActionRepository;

  constructor() {
    this.repository = new DemandRepository();
    this.actionRepo = new ActionRepository();
  }

  async create(data: any) {
    return this.repository.create(data);
  }

  async list(filters: { status?: string; providerId?: string }) {
    return this.repository.findAll(filters);
  }

  async getById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, data: any) {
    // Buscar demanda atual antes de atualizar
    const demandaAtual = await this.repository.findById(id);
    if (!demandaAtual) throw new Error("Demanda não encontrada.");

    const statusAntes = demandaAtual.status;
    const tipoAntes = demandaAtual.type;

    // Atualizar demanda
    const demandaAtualizada = await this.repository.update(id, data);

    const statusDepois = demandaAtualizada.status;
    const tipoDepois = demandaAtualizada.type;

    // Se houve mudança, registrar ação técnica
    if (statusAntes !== statusDepois || tipoAntes !== tipoDepois) {
      await this.actionRepo.create({
        description: "Atualização automática da demanda",
        technician: "Sistema", // ou usuário logado
        demandId: demandaAtualizada.id,
        statusBefore: statusAntes,
        statusAfter: statusDepois,
      });
    }

    return demandaAtualizada;
  }

  async updateStatus(id: string, status: string) {
    const demandaAtual = await this.repository.findById(id);
    if (!demandaAtual) throw new Error("Demanda não encontrada.");

    const statusAntes = demandaAtual.status;

    const demandaAtualizada = await this.repository.updateStatus(id, status);

    if (statusAntes !== status) {
      await this.actionRepo.create({
        description: "Alteração de status da demanda",
        technician: "Sistema",
        demandId: demandaAtualizada.id,
        statusBefore: statusAntes,
        statusAfter: status,
      });
    }

    return demandaAtualizada;
  }

  async remove(id: string) {
    return this.repository.delete(id);
  }
}
