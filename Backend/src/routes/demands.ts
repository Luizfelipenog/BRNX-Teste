import { Router } from "express";
import { DemandController } from "../controllers/demandController";

const router = Router();
const demandController = new DemandController();

// Criar nova demanda
router.post(
  "/",
  (req, res) => demandController.create(req, res)
);

// Listar demandas (com filtros opcionais: ?status=...&providerId=...)
router.get(
  "/",
  (req, res) => demandController.list(req, res)
);

// Buscar demanda por ID
router.get(
  "/:id",
  (req, res) => demandController.getById(req, res)
);

// Atualizar demanda por ID
router.put(
  "/:id",
  (req, res) => demandController.update(req, res)
);

// Atualizar apenas o status da demanda
router.patch(
  "/:id/status",
  (req, res) => demandController.updateStatus(req, res)
);

// Deletar demanda por ID
router.delete(
  "/:id",
  (req, res) => demandController.remove(req, res)
);

export default router;
