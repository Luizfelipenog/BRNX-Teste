"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const httpError_1 = require("../utils/httpError");
function errorHandler(err, _req, res, _next) {
    if (err instanceof httpError_1.HttpError) {
        return res.status(err.status).json({ error: err.message });
    }
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
}
