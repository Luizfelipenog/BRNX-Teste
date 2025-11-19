import { Request, Response } from "express";
import { ActionService } from "../services/actionService";

const service = new ActionService();

export class ActionController {
  async getAll(req: Request, res: Response) {
    const actions = await service.getAllActions();
    return res.json(actions);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const action = await service.getActionById(id);
    return res.json(action);
  }

  async create(req: Request, res: Response) {
    const created = await service.createAction(req.body);
    return res.status(201).json(created);
  }
}
