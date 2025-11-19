# Use Node.js baseado no Alpine
FROM node:20-alpine

# Instalar OpenSSL e bash
RUN apk add --no-cache openssl3 bash

# Diretório de trabalho
WORKDIR /app

# Copiar pacotes e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar tsconfig e fontes
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

# Compilar o projeto
RUN npm run build

# Gerar o Prisma Client após build
RUN npx prisma generate

# Expor porta
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
