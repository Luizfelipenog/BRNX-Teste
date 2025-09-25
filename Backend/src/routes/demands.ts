import { Router } from 'express';
import { providerController } from '../controllers/providerController';
import { validateBody } from '../middleware/validate';
import { providerCreateSchema, providerUpdateSchema } from '../models/types';

const router = Router();

// Definir as rotas relacionadas a providers
router.post('/', validateBody(providerCreateSchema), providerController.create);
router.get('/', providerController.list);
router.get('/:id', providerController.get);
router.put('/:id', validateBody(providerUpdateSchema), providerController.update);
router.delete('/:id', providerController.remove);

export default router;
