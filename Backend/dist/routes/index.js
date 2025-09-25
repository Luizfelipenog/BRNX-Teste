"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const providers_1 = __importDefault(require("./providers"));
const demands_1 = __importDefault(require("./demands"));
const actions_1 = __importDefault(require("./actions"));
const router = (0, express_1.Router)();
// Integrar todas as rotas no index
router.use('/providers', providers_1.default);
router.use('/demands', demands_1.default);
router.use('/actions', actions_1.default);
exports.default = router;
