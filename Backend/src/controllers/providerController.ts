import { Request, Response } from "express";
import { ProviderService } from "../services/providerService";

const providerService = new ProviderService();

export class ProviderController {
  async list(req: Request, res: Response) {
    try {
      const providers = await providerService.list();
      return res.json(providers);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const provider = await providerService.getById(id);
      return res.json(provider);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const created = await providerService.create(req.body);
      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await providerService.update(id, req.body);
      return res.json(updated);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await providerService.remove(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
