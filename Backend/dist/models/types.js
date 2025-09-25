"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreateSchema = exports.demandsQuerySchema = exports.demandStatusSchema = exports.demandUpdateSchema = exports.demandCreateSchema = exports.providerUpdateSchema = exports.providerCreateSchema = void 0;
const zod_1 = require("zod");
exports.providerCreateSchema = zod_1.z.object({
    nomeFantasia: zod_1.z.string().min(2),
    responsavel: zod_1.z.string().min(2),
    contatoEmail: zod_1.z.string().email().optional(),
    contatoTelefone: zod_1.z.string().optional()
});
exports.providerUpdateSchema = exports.providerCreateSchema.partial();
exports.demandCreateSchema = zod_1.z.object({
    providerId: zod_1.z.string().uuid(),
    title: zod_1.z.string().min(2),
    description: zod_1.z.string().min(2),
    type: zod_1.z.enum(['DIAGNOSTICO', 'MANUTENCAO', 'CONFIGURACAO', 'INSTALACAO', 'OUTRO']),
    status: zod_1.z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA']).optional()
});
exports.demandUpdateSchema = exports.demandCreateSchema.partial();
exports.demandStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA'])
});
exports.demandsQuerySchema = zod_1.z.object({
    status: zod_1.z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA']).optional(),
    providerId: zod_1.z.string().uuid().optional()
});
exports.actionCreateSchema = zod_1.z.object({
    demandId: zod_1.z.string().uuid(),
    description: zod_1.z.string().min(2),
    technician: zod_1.z.string().min(2)
});
