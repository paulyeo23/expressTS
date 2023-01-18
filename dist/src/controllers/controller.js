"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const service_1 = require("../service/service");
const controllerRedirect = (request, response) => {
    const getAllEmployees = (request, response) => {
        try {
            response.status(200).json(service_1.services.getAllEmployees());
        }
        catch (_a) {
            response.status(500).json({ errormessage: "Server error" });
        }
    };
    const createNewEmployee = (request, response) => {
        try {
            const newEmployeeData = request.body;
            const result = service_1.services.createNewEmployee(newEmployeeData);
            response.status(200).json(result);
        }
        catch (_a) {
            response.status(400).json({ "error message": "bad request" });
        }
    };
    const getOneEmployee = (request, response) => {
        try {
            const idRequest = Number(request.params.emp_id);
            const result = service_1.services.getOneEmployee(idRequest);
            if (result == undefined) {
                response.status(404).json({ errorMessage: "Not Found" });
            }
            else {
                response.status(200).json(result);
            }
        }
        catch (_a) {
            response.status(500).json({ errormessage: "Server error" });
        }
    };
    const updateEmployee = (request, response) => {
        try {
            try {
                const updatedId = Number(request.params.emp_id);
                const updatedEntry = request.body;
                try {
                    const result = service_1.services.updateEmployee(updatedId, updatedEntry);
                    response.status(200).json(result);
                }
                catch (_a) {
                    response.status(400).json({ errormessage: "Not Found" });
                }
            }
            catch (_b) {
                response.status(404).json({ errormessage: "Bad Request" });
            }
        }
        catch (_c) {
            response.status(500).json({ errormessage: "Server error" });
        }
    };
    const deleteEmployee = (request, response) => {
        try {
            try {
                const deletedId = Number(request.params.emp_id);
                service_1.services.deleteEmployee(deletedId);
                response.status(204);
            }
            catch (_a) {
                response.status(404).json({ errormessage: "Not found" });
            }
        }
        catch (_b) {
            response.status(500).json({ errormessage: "Server error" });
        }
    };
    return {
        getAllEmployees,
        createNewEmployee,
        getOneEmployee,
        updateEmployee,
        deleteEmployee,
    };
};
exports.controller = controllerRedirect();
