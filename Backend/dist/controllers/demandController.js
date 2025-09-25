"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demandController = void 0;
const demandService_1 = require("../services/demandService");
exports.demandController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const created = yield demandService_1.demandService.create(req.body);
        res.status(201).json(created);
    }),
    list: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { status, providerId } = req.parsedQuery || {};
        res.json(yield demandService_1.demandService.list({ status, providerId }));
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield demandService_1.demandService.get(req.params.id));
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield demandService_1.demandService.update(req.params.id, req.body));
    }),
    updateStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield demandService_1.demandService.updateStatus(req.params.id, req.body.status));
    }),
    remove: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield demandService_1.demandService.remove(req.params.id);
        res.status(204).send();
    })
};
