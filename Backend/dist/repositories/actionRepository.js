"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionRepository = void 0;
const database_1 = require("../config/database");
exports.actionRepository = {
    create(data) {
        return database_1.prisma.action.create({ data });
    },
    listByDemand(demandId) {
        return database_1.prisma.action.findMany({
            where: { demandId },
            orderBy: { executedAt: 'desc' }
        });
    },
    remove(id) {
        return database_1.prisma.action.delete({ where: { id } });
    }
};
