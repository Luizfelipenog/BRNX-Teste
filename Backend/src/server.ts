import "dotenv/config"; // Carrega variáveis de ambiente
import { env } from "./config/env"; 
import { app } from "./app";

const port = Number(env.PORT) || 3000;

// Importante para Docker: permitir escutar em todas as interfaces
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`🚀 BRNX backend rodando em http://${host}:${port}`);
}).on("error", (err) => {
  console.error("❌ Erro ao iniciar o servidor:", err);
  process.exit(1);
});
