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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sequelize_1 = require("sequelize");
const employeeFunctions = () => {
    const secret = "fFV61G48Nwv2KaKn0wmE0aQNdurBt107o3nj7t9EFLoaK6NDHL1paHme8GuJfDhJIcib6OYBjwQl3i9fwdZsN5bSymhjGts7FBXI";
    const getAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
        const query = yield index_1.default.departments.findAll({
            where: { department: "admin" },
        });
        return query[0].id;
    });
    const getAllEmployees = (departmentId) => __awaiter(void 0, void 0, void 0, function* () {
        const adminId = yield getAdminId();
        const employees = yield index_1.default.employees.findAll({
            include: [
                {
                    model: index_1.default.departments,
                    attributes: ["department"],
                    required: true,
                },
            ],
            order: [["id", "ASC"]],
            where: {
                departmentId: departmentId == adminId ? { [sequelize_1.Op.not]: null } : departmentId,
            },
        });
        const result = [];
        employees.forEach((employee) => {
            result.push({
                id: employee.id,
                name: employee.name,
                salary: employee.salary,
                department: employee.department.department,
            });
        });
        return { employees: result };
    });
    const createNewEmployee = (entry) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.create({
            name: entry.name,
            salary: entry.salary,
            departmentId: entry.departmentId,
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
            departmentId: entry.departmentId,
        }, { where: { id: id } });
    });
    const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield index_1.default.employees.destroy({
            where: { id: id },
        });
    });
    const getAllDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            departments: yield index_1.default.departments.findAll(),
        };
    });
    const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
        const checkPassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
            const match = yield bcryptjs_1.default.compare(password, hashedPassword);
            return match;
        });
        const dbResult = yield index_1.default.users.findOne({
            where: {
                username: username,
            },
        });
        let hashedPassword;
        dbResult == null
            ? (hashedPassword = "")
            : (hashedPassword = dbResult.password);
        if ((yield checkPassword(password, hashedPassword)) == true) {
            const payload = {
                userId: dbResult === null || dbResult === void 0 ? void 0 : dbResult.id,
                departmentId: dbResult === null || dbResult === void 0 ? void 0 : dbResult.departmentId,
            };
            const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: "1h" });
            return token;
        }
        else {
            return;
        }
    });
    return {
        getAllEmployees,
        getAllDepartments,
        createNewEmployee,
        getOneEmployee,
        updateEmployee,
        deleteEmployee,
        login,
        secret,
    };
};
exports.default = employeeFunctions;
