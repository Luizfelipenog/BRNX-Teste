import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/httpError";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // Erros customizados da aplicação
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      error: err.message,
    });
  }

  // Erros desconhecidos (bugs, exceptions, prisma errors etc.)
  console.error("❌ ERRO INTERNO:", err);

  return res.status(500).json({
    error: "Internal Server Error",
  });
}
