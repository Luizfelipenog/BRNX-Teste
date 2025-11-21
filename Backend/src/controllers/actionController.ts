import { Request, Response } from "express";
import { ActionService } from "../services/actionService";

const actionService = new ActionService();

export class ActionController {
  /**
   * Lista TODAS as ações técnicas
   */
  async list(req: Request, res: Response) {
    try {
      const actions = await actionService.list();
      return res.json(actions);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Lista ações de UMA demanda específica
   * Rota: GET /api/actions/by-demand?demandId=UUID
   */
  async listByDemand(req: Request, res: Response) {
    try {
      const { demandId } = req.query;

      if (!demandId) {
        return res.status(400).json({ error: "demandId é obrigatório" });
      }

      const actions = await actionService.listByDemand(String(demandId));
      return res.json(actions);

    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Busca ação por ID
   */
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const action = await actionService.getById(id);
      return res.json(action);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Cria nova ação técnica
   */
  async create(req: Request, res: Response) {
    try {
      const created = await actionService.create(req.body);
      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
