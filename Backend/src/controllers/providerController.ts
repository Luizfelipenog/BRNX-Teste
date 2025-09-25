import { Request, Response } from 'express';
import { providerService } from '../services/providerService';

export const providerController = {
  create: async (req: Request, res: Response) => {
    const created = await providerService.create(req.body);
    res.status(201).json(created);
  },
  list: async (_req: Request, res: Response) => {
    res.json(await providerService.list());
  },
  get: async (req: Request, res: Response) => {
    res.json(await providerService.get(req.params.id));
  },
  update: async (req: Request, res: Response) => {
    res.json(await providerService.update(req.params.id, req.body));
  },
  remove: async (req: Request, res: Response) => {
    await providerService.remove(req.params.id);
    res.status(204).send();
  }
};
