import { Router } from 'express';
import { actionController } from '../controllers/actionController';
import { validateBody } from '../middleware/validate';
import { actionCreateSchema } from '../models/types';

const router = Router();

// Definir as rotas relacionadas a actions
router.post('/', validateBody(actionCreateSchema), actionController.create);
router.get('/by-demand/:demandId', actionController.listByDemand);
router.delete('/:id', actionController.remove);

export default router;
