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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../models/index"));
const employeeFunctions = () => {
    const getAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            employees: yield index_1.default.employees.findAll({ order: [["id", "ASC"]] }),
        };
    });
    const createNewEmployee = (entry) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.create({
            name: entry.name,
            salary: entry.salary,
            department: entry.department,
        });
    });
    const getOneEmployee = (idRequest) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.findOne({
            where: { id: idRequest },
        });
    });
    const updateEmployee = (id, entry) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.update({
            name: entry.name,
            salary: entry.salary,
            department: entry.department,
        }, { where: { id: id } });
    });
    const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.destroy({
            where: { id: id },
        });
    });
    const getAllDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            departments: yield index_1.default.employees.findAll({
                attributes: ["department"],
                group: ["department"],
            }),
        };
    });
    return {
        getAllEmployees,
        getAllDepartments,
        createNewEmployee,
        getOneEmployee,
        updateEmployee,
        deleteEmployee,
    };
};
exports.default = employeeFunctions;
