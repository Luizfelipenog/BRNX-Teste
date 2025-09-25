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
exports.actionService = void 0;
const actionRepository_1 = require("../repositories/actionRepository");
const demandRepository_1 = require("../repositories/demandRepository");
const httpError_1 = require("../utils/httpError");
exports.actionService = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const demand = yield demandRepository_1.demandRepository.get(data.demandId);
            if (!demand)
                throw new httpError_1.HttpError(400, 'DemandId inválido');
            return actionRepository_1.actionRepository.create(data);
        });
    },
    listByDemand(demandId) {
        return actionRepository_1.actionRepository.listByDemand(demandId);
    },
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return actionRepository_1.actionRepository.remove(id);
        });
    }
};
