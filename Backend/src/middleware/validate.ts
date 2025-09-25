import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';
import { HttpError } from '../utils/httpError';

export function validateBody(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) throw new HttpError(400, parsed.error.issues.map(i => i.message).join('; '));
    req.body = parsed.data;
    next();
  };
}

export function validateQuery(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.query);
    if (!parsed.success) throw new HttpError(400, parsed.error.issues.map(i => i.message).join('; '));
    (req as any).parsedQuery = parsed.data;
    next();
  };
}
