import { Router } from "express";
import { ActionController } from "../controllers/actionController";

const router = Router();
const actionController = new ActionController();

// Criar nova ação técnica
router.post(
  "/",
  (req, res) => actionController.create(req, res)
);

// Listar todas as ações
router.get(
  "/",
  (req, res) => actionController.list(req, res)
);

// Obter ação por ID
router.get(
  "/:id",
  (req, res) => actionController.getById(req, res)
);

export default router;
