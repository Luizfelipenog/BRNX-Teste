# Use a versão do Node.js baseada no Alpine
FROM node:20-alpine

# Instalar OpenSSL para resolver problemas com Prisma
RUN apk add --no-cache openssl3


# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json e instala as dependências
COPY package.json package-lock.json* ./
RUN npm ci

# Copia o diretório do Prisma e gera o cliente Prisma
COPY prisma ./prisma
RUN npx prisma generate

# Copia o tsconfig.json
COPY tsconfig.json ./

# Copia o código fonte da aplicação
COPY src ./src

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Define o comando de inicialização do container
CMD ["npm", "run", "dev"]
