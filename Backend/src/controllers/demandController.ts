import { Request, Response } from "express";
import { DemandService } from "../services/demandService";

const service = new DemandService();

export class DemandController {
  async create(req: Request, res: Response) {
    const created = await service.create(req.body);
    res.status(201).json(created);
  }

  async list(req: Request, res: Response) {
    const { status, providerId } = req.query;
    res.json(await service.list({ status: status as string, providerId: providerId as string }));
  }

  async get(req: Request, res: Response) {
    res.json(await service.get(req.params.id));
  }

  async update(req: Request, res: Response) {
    res.json(await service.update(req.params.id, req.body));
  }

  async updateStatus(req: Request, res: Response) {
    res.json(await service.updateStatus(req.params.id, req.body.status));
  }

  async remove(req: Request, res: Response) {
    await service.remove(req.params.id);
    res.status(204).send();
  }
}
