import { prisma } from './config/database';

async function run() {
  const provider = await prisma.provider.create({
    data: {
      nomeFantasia: 'BRNX Fibra',
      responsavel: 'Ana Souza',
      contatoEmail: 'ana@brnx.com',
      contatoTelefone: '(86) 99999-0000'
    }
  });

  const demand = await prisma.demand.create({
    data: {
      providerId: provider.id,
      title: 'Lentidão na borda',
      description: 'Tráfego alto na eth1',
      type: 'DIAGNOSTICO',
      status: 'PENDENTE'
    }
  });

  await prisma.action.create({
    data: {
      demandId: demand.id,
      description: 'Aplicado controle de banda',
      technician: 'Carlos Lima'
    }
  });

  console.log({ provider, demand });
}
run().finally(() => prisma.$disconnect());
