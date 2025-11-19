import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { HttpError } from "../utils/httpError";

export function validateBody(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues.map(i => i.message).join("; ");
      throw new HttpError(400, message);
    }

    req.body = result.data;
    next();
  };
}

export function validateQuery(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      const message = result.error.issues.map(i => i.message).join("; ");
      throw new HttpError(400, message);
    }

    // Armazena os dados validados sem sobrescrever req.query
    (req as any).validatedQuery = result.data;

    next();
  };
}
