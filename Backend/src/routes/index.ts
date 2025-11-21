import { Router } from "express";
import providerRoutes from "./providers";
import demandRoutes from "./demands";
import actionRoutes from "./actions";

const router = Router();

// Rotas principais da API
router.use("/providers", providerRoutes);
router.use("/demands", demandRoutes);
router.use("/actions", actionRoutes);

export default router;
