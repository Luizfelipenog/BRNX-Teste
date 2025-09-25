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
exports.demandService = void 0;
const demandRepository_1 = require("../repositories/demandRepository");
const providerRepository_1 = require("../repositories/providerRepository");
const httpError_1 = require("../utils/httpError");
exports.demandService = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield providerRepository_1.providerRepository.get(data.providerId);
            if (!provider)
                throw new httpError_1.HttpError(400, 'ProviderId inválido');
            return demandRepository_1.demandRepository.create(data);
        });
    },
    list(filters) {
        return demandRepository_1.demandRepository.list(filters);
    },
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = yield demandRepository_1.demandRepository.get(id);
            if (!d)
                throw new httpError_1.HttpError(404, 'Demanda não encontrada');
            return d;
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.demandService.get(id);
            return demandRepository_1.demandRepository.update(id, data);
        });
    },
    updateStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.demandService.get(id);
            return demandRepository_1.demandRepository.update(id, { status });
        });
    },
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.demandService.get(id);
            return demandRepository_1.demandRepository.remove(id);
        });
    }
};
