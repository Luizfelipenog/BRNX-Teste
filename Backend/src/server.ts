import 'dotenv/config';  // Garantir que as variáveis de ambiente sejam carregadas antes de qualquer coisa
import { env } from './config/env';  // Importa as variáveis de ambiente
import { app } from './app';  // Importa a configuração do app

const port = env.PORT || 3000;  // Usa a variável de ambiente PORT ou 3000 por padrão

app.listen(port, () => {
  console.log(`BRNX backend listening on http://localhost:${port}`);
});
