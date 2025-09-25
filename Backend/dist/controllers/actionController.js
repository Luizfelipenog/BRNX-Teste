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
exports.actionController = void 0;
const actionService_1 = require("../services/actionService");
exports.actionController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const created = yield actionService_1.actionService.create(req.body);
        res.status(201).json(created);
    }),
    listByDemand: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield actionService_1.actionService.listByDemand(req.params.demandId));
    }),
    remove: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield actionService_1.actionService.remove(req.params.id);
        res.status(204).send();
    })
};
