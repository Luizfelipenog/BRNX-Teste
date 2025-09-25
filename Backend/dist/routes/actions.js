"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actionController_1 = require("../controllers/actionController");
const validate_1 = require("../middleware/validate");
const types_1 = require("../models/types");
const router = (0, express_1.Router)();
// Definir as rotas relacionadas a actions
router.post('/', (0, validate_1.validateBody)(types_1.actionCreateSchema), actionController_1.actionController.create);
router.get('/by-demand/:demandId', actionController_1.actionController.listByDemand);
router.delete('/:id', actionController_1.actionController.remove);
exports.default = router;
