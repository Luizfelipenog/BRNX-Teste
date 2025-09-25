"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerRepository = void 0;
const database_1 = require("../config/database");
exports.providerRepository = {
    create(data) {
        return database_1.prisma.provider.create({ data });
    },
    list() {
        return database_1.prisma.provider.findMany({ orderBy: { createdAt: 'desc' } });
    },
    get(id) {
        return database_1.prisma.provider.findUnique({ where: { id } });
    },
    update(id, data) {
        return database_1.prisma.provider.update({ where: { id }, data });
    },
    remove(id) {
        return database_1.prisma.provider.delete({ where: { id } });
    }
};
