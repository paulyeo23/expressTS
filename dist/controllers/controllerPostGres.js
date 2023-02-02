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
exports.controllerFunctions = void 0;
const sequelizeService_1 = __importDefault(require("../service/sequelizeService"));
const employeeServices = (0, sequelizeService_1.default)();
const controllerFunctions = () => {
    const getAllEmployees = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            response.status(200).json(yield employeeServices.getAllEmployees());
        }
        catch (_a) {
            response.status(500).json({ errorMessage: "Server error" });
        }
    });
    const getAllDepartments = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            response.status(200).json(yield employeeServices.getAllDepartments());
        }
        catch (_b) {
            response.status(500).json({ errorMessage: "Server error" });
        }
    });
    const createNewEmployee = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newEmployeeData = request.body;
            const result = yield employeeServices.createNewEmployee(newEmployeeData);
            response.status(200).json(result);
        }
        catch (_c) {
            response.status(400).json({ errorMessage: "bad request" });
        }
    });
    const getOneEmployee = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const idRequest = Number(request.params.emp_id);
            const result = yield employeeServices.getOneEmployee(idRequest);
            if (result == null) {
                response.status(404).json({ errorMessage: "Not Found" });
            }
            else {
                response.status(200).json(result);
            }
        }
        catch (_d) {
            response.status(500).json({ errorMessage: "Server error" });
        }
    });
    const updateEmployee = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            try {
                const updatedId = Number(request.params.emp_id);
                const updatedEntry = request.body;
                const result = yield employeeServices.updateEmployee(updatedId, updatedEntry);
                if (result[0] == 0) {
                    response.status(400).json({ errorMessage: "Not Found" });
                }
                else {
                    response
                        .status(200)
                        .json(Object.assign({ id: updatedId }, updatedEntry));
                }
            }
            catch (_e) {
                response.status(404).json({ errorMessage: "Bad Request" });
            }
        }
        catch (_f) {
            response.status(500).json({ errorMessage: "Server error" });
        }
    });
    const deleteEmployee = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedId = Number(request.params.emp_id);
            const results = yield employeeServices.deleteEmployee(deletedId);
            if (results > 0) {
                response.status(204).json();
            }
            else {
                response.status(404).json({ errorMessage: "Not found" });
            }
        }
        catch (_g) {
            response.status(500).json({ errorMessage: "Server error" });
        }
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
exports.controllerFunctions = controllerFunctions;
