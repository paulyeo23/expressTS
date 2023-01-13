"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDataStructures = void 0;
const joi_1 = __importDefault(require("joi"));
exports.employeeDataStructures = {
    newEmployee: joi_1.default.object({
        name: joi_1.default.string(),
        salary: joi_1.default.number(),
        department: joi_1.default.string(),
    }),
    employee: joi_1.default.object({
        id: joi_1.default.number(),
        name: joi_1.default.string(),
        salary: joi_1.default.number(),
        department: joi_1.default.string(),
    }),
};
