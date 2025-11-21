-- CreateEnum
CREATE TYPE "DemandType" AS ENUM ('DIAGNOSTICO', 'MANUTENCAO', 'CONFIGURACAO', 'INSTALACAO', 'OUTRO');

-- CreateEnum
CREATE TYPE "DemandStatus" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA');

-- CreateTable
CREATE TABLE "Provider" (
    "id" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "contatoEmail" TEXT,
    "contatoTelefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demand" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "DemandType" NOT NULL,
    "status" "DemandStatus" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "Demand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technician" TEXT NOT NULL,
    "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "demandId" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
