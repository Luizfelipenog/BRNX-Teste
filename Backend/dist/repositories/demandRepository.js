"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demandRepository = void 0;
const database_1 = require("../config/database");
exports.demandRepository = {
    create(data) {
        return database_1.prisma.demand.create({ data });
    },
    list(filters) {
        return database_1.prisma.demand.findMany({
            where: {
                status: filters === null || filters === void 0 ? void 0 : filters.status,
                providerId: filters === null || filters === void 0 ? void 0 : filters.providerId
            },
            include: { provider: true },
            orderBy: { createdAt: 'desc' }
        });
    },
    get(id) {
        return database_1.prisma.demand.findUnique({
            where: { id },
            include: { provider: true, actions: { orderBy: { executedAt: 'desc' } } }
        });
    },
    update(id, data) {
        return database_1.prisma.demand.update({ where: { id }, data });
    },
    remove(id) {
        return database_1.prisma.demand.delete({ where: { id } });
    }
};
