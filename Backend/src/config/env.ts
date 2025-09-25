import 'dotenv/config';  // Garantir que as variáveis de ambiente sejam carregadas

export const env = {
  PORT: parseInt(process.env.PORT || '3000', 10), // Usa a variável PORT ou padrão para 3000
  DATABASE_URL: process.env.DATABASE_URL!, // Banco de dados principal
  NODE_ENV: process.env.NODE_ENV || 'development' // Ambiente (desenvolvimento ou produção)
};
