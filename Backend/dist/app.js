"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middleware/errorHandler");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
// Rota de verificação de saúde
exports.app.get('/health', (_req, res) => res.json({ status: 'ok' }));
// Adicionando rota para a raiz '/'
exports.app.get('/', (_req, res) => {
    res.send('Servidor está funcionando!');
});
// Configuração das rotas principais da API
exports.app.use('/api', routes_1.default);
// Middleware de erro
exports.app.use(errorHandler_1.errorHandler);
