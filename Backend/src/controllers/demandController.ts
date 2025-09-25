import { Request, Response } from 'express';
import { demandService } from '../services/demandService';

export const demandController = {
  create: async (req: Request, res: Response) => {
    const created = await demandService.create(req.body);
    res.status(201).json(created);
  },
  list: async (req: Request, res: Response) => {
    const { status, providerId } = (req as any).parsedQuery || {};
    res.json(await demandService.list({ status, providerId }));
  },
  get: async (req: Request, res: Response) => {
    res.json(await demandService.get(req.params.id));
  },
  update: async (req: Request, res: Response) => {
    res.json(await demandService.update(req.params.id, req.body));
  },
  updateStatus: async (req: Request, res: Response) => {
    res.json(await demandService.updateStatus(req.params.id, req.body.status));
  },
  remove: async (req: Request, res: Response) => {
    await demandService.remove(req.params.id);
    res.status(204).send();
  }
};
