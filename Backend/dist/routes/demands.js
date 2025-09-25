"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const providerController_1 = require("../controllers/providerController");
const validate_1 = require("../middleware/validate");
const types_1 = require("../models/types");
const router = (0, express_1.Router)();
// Definir as rotas relacionadas a providers
router.post('/', (0, validate_1.validateBody)(types_1.providerCreateSchema), providerController_1.providerController.create);
router.get('/', providerController_1.providerController.list);
router.get('/:id', providerController_1.providerController.get);
router.put('/:id', (0, validate_1.validateBody)(types_1.providerUpdateSchema), providerController_1.providerController.update);
router.delete('/:id', providerController_1.providerController.remove);
exports.default = router;
