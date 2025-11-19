import { Request, Response } from "express";
import { ActionService } from "../services/actionService";

const actionService = new ActionService();

export class ActionController {
  async list(req: Request, res: Response) {
    try {
      const actions = await actionService.list();
      return res.json(actions);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const action = await actionService.getById(id);
      return res.json(action);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const created = await actionService.create(req.body);
      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
