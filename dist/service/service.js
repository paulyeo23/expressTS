"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const path_1 = __importDefault(require("path"));
const JSONAddress = path_1.default.resolve(__dirname, "../models/employee.json");
// const data: Data = require(JSONAddress);
const fs_1 = __importDefault(require("fs"));
const rawData = fs_1.default.readFileSync(JSONAddress, "utf8");
const data = JSON.parse(rawData);
const serviceFunctions = () => {
    const getAllEmployees = () => {
        return data.employees;
    };
    const createNewEmployee = (entry) => {
        const newId = data.employees[data.employees.length - 1].id + 1;
        const newEntry = Object.assign({ id: newId }, entry);
        data.employees.push(newEntry);
        fs_1.default.writeFileSync(JSONAddress, JSON.stringify(data));
        return newEntry;
    };
    const getOneEmployee = (idRequest) => {
        return data.employees.filter((employee) => {
            return employee.id == idRequest;
        })[0];
    };
    const updateEmployee = (updatedId, updatedEntry) => {
        const id = data.employees.findIndex((employee) => {
            return employee.id == updatedId;
        });
        data.employees[id] = Object.assign({ id: updatedId }, updatedEntry);
        fs_1.default.writeFileSync(JSONAddress, JSON.stringify(data));
        return data.employees[id];
    };
    const deleteEmployee = (deletedId) => {
        const index = data.employees.findIndex((employee) => {
            return employee.id == deletedId;
        });
        console.log(deletedId);
        if (index >= 0) {
            data.employees.splice(index, 1);
            fs_1.default.writeFileSync(JSONAddress, JSON.stringify(data));
        }
        return index;
    };
    return {
        getAllEmployees,
        createNewEmployee,
        getOneEmployee,
        updateEmployee,
        deleteEmployee,
    };
};
exports.services = serviceFunctions();
