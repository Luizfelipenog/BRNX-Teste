import { Request, Response } from 'express';
import { actionService } from '../services/actionService';

export const actionController = {
  create: async (req: Request, res: Response) => {
    const created = await actionService.create(req.body);
    res.status(201).json(created);
  },
  listByDemand: async (req: Request, res: Response) => {
    res.json(await actionService.listByDemand(req.params.demandId));
  },
  remove: async (req: Request, res: Response) => {
    await actionService.remove(req.params.id);
    res.status(204).send();
  }
};
