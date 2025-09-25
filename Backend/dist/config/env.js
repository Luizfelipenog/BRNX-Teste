"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config"); // Garantir que as variáveis de ambiente sejam carregadas
exports.env = {
    PORT: parseInt(process.env.PORT || '3000', 10), // Usa a variável PORT ou padrão para 3000
    DATABASE_URL: process.env.DATABASE_URL, // Banco de dados principal
    NODE_ENV: process.env.NODE_ENV || 'development' // Ambiente (desenvolvimento ou produção)
};
