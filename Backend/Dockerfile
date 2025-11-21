# Use Node.js baseado no Alpine
FROM node:20-alpine

# Instalar OpenSSL e bash
RUN apk add --no-cache openssl3 bash

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar schema do Prisma antes do generate
COPY prisma ./prisma

# Gerar o Prisma Client (precisa antes do build)
RUN npx prisma generate

# Copiar tsconfig e fontes
COPY tsconfig.json ./
COPY src ./src

# Compilar o Typescript
RUN npm run build



# Expor porta
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
