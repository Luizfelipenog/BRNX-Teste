export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;
    this.name = "HttpError";

    // Fix para herança correta de Error no TypeScript
    Object.setPrototypeOf(this, new.target.prototype);

    // Preserva stack trace real (melhor para debugging)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
