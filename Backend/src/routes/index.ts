import { Router } from 'express';
import providers from './providers';
import demands from './demands';
import actions from './actions';

const router = Router();

// Integrar todas as rotas no index
router.use('/providers', providers);
router.use('/demands', demands);
router.use('/actions', actions);

export default router;
