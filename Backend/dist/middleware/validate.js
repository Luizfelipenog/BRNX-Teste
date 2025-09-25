"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
exports.validateQuery = validateQuery;
const httpError_1 = require("../utils/httpError");
function validateBody(schema) {
    return (req, _res, next) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success)
            throw new httpError_1.HttpError(400, parsed.error.issues.map(i => i.message).join('; '));
        req.body = parsed.data;
        next();
    };
}
function validateQuery(schema) {
    return (req, _res, next) => {
        const parsed = schema.safeParse(req.query);
        if (!parsed.success)
            throw new httpError_1.HttpError(400, parsed.error.issues.map(i => i.message).join('; '));
        req.parsedQuery = parsed.data;
        next();
    };
}
