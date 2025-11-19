import { Router } from "express";
import { ProviderController } from "../controllers/providerController";
import { validateBody } from "../middleware/validate";
import {
  providerCreateSchema,
  providerUpdateSchema,
} from "../models/types";

const router = Router();
const providerController = new ProviderController();

// Rotas de Provedores
router.post(
  "/",
  validateBody(providerCreateSchema),
  (req, res) => providerController.create(req, res)
);

router.get(
  "/",
  (req, res) => providerController.list(req, res)
);

router.get(
  "/:id",
  (req, res) => providerController.getById(req, res)
);

router.put(
  "/:id",
  validateBody(providerUpdateSchema),
  (req, res) => providerController.update(req, res)
);

router.delete(
  "/:id",
  (req, res) => providerController.remove(req, res)
);

export default router;
