"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // Garantir que as variáveis de ambiente sejam carregadas antes de qualquer coisa
const env_1 = require("./config/env"); // Importa as variáveis de ambiente
const app_1 = require("./app"); // Importa a configuração do app
const port = env_1.env.PORT || 3000; // Usa a variável de ambiente PORT ou 3000 por padrão
app_1.app.listen(port, () => {
    console.log(`BRNX backend listening on http://localhost:${port}`);
});
