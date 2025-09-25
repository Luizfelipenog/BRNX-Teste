import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

app.use(cors());
app.use(express.json());

// Rota de verificação de saúde
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Adicionando rota para a raiz '/'
app.get('/', (_req, res) => {
  res.send('Servidor está funcionando!');
});

// Configuração das rotas principais da API
app.use('/api', routes);

// Middleware de erro
app.use(errorHandler);
