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
exports.providerService = void 0;
const providerRepository_1 = require("../repositories/providerRepository");
const httpError_1 = require("../utils/httpError");
exports.providerService = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return providerRepository_1.providerRepository.create(data);
        });
    },
    list() { return providerRepository_1.providerRepository.list(); },
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield providerRepository_1.providerRepository.get(id);
            if (!p)
                throw new httpError_1.HttpError(404, 'Provedor não encontrado');
            return p;
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.providerService.get(id);
            return providerRepository_1.providerRepository.update(id, data);
        });
    },
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.providerService.get(id);
            return providerRepository_1.providerRepository.remove(id);
        });
    }
};
