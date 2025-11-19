import { Request, Response } from "express";
import { DemandService } from "../services/demandService";

const demandService = new DemandService();

export class DemandController {
  async create(req: Request, res: Response) {
    try {
      const created = await demandService.create(req.body);
      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const { status, providerId } = req.query;

      const filters = {
        status: status ? String(status) : undefined,
        providerId: providerId ? String(providerId) : undefined,
      };

      const demands = await demandService.list(filters);
      return res.json(demands);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const demand = await demandService.getById(id);
      return res.json(demand);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await demandService.update(id, req.body);
      return res.json(updated);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await demandService.updateStatus(id, status);
      return res.json(updated);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await demandService.remove(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
