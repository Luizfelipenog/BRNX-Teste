"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield database_1.prisma.provider.create({
            data: {
                nomeFantasia: 'BRNX Fibra',
                responsavel: 'Ana Souza',
                contatoEmail: 'ana@brnx.com',
                contatoTelefone: '(86) 99999-0000'
            }
        });
        const demand = yield database_1.prisma.demand.create({
            data: {
                providerId: provider.id,
                title: 'Lentidão na borda',
                description: 'Tráfego alto na eth1',
                type: 'DIAGNOSTICO',
                status: 'PENDENTE'
            }
        });
        yield database_1.prisma.action.create({
            data: {
                demandId: demand.id,
                description: 'Aplicado controle de banda',
                technician: 'Carlos Lima'
            }
        });
        console.log({ provider, demand });
    });
}
run().finally(() => database_1.prisma.$disconnect());
