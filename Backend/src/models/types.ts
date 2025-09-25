import { z } from 'zod';

export const providerCreateSchema = z.object({
  nomeFantasia: z.string().min(2),
  responsavel: z.string().min(2),
  contatoEmail: z.string().email().optional(),
  contatoTelefone: z.string().optional()
});

export const providerUpdateSchema = providerCreateSchema.partial();

export const demandCreateSchema = z.object({
  providerId: z.string().uuid(),
  title: z.string().min(2),
  description: z.string().min(2),
  type: z.enum(['DIAGNOSTICO', 'MANUTENCAO', 'CONFIGURACAO', 'INSTALACAO', 'OUTRO']),
  status: z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA']).optional()
});

export const demandUpdateSchema = demandCreateSchema.partial();

export const demandStatusSchema = z.object({
  status: z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA'])
});

export const demandsQuerySchema = z.object({
  status: z.enum(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA']).optional(),
  providerId: z.string().uuid().optional()
});

export const actionCreateSchema = z.object({
  demandId: z.string().uuid(),
  description: z.string().min(2),
  technician: z.string().min(2)
});
