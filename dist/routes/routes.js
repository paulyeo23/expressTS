"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controllerPostGres_1 = require("../controllers/controllerPostGres");
// {
//     getAllEmployee,
//     createEmployee,
//     getOneEmployee,
//     updateEmployee,
//     deleteEmployee,
//   }
const employeeControllers = (0, controllerPostGres_1.controllerFunctions)();
const routes = (app) => {
    app.get("/employee", employeeControllers.getAllEmployees);
    app.get("/departments", employeeControllers.getAllDepartments);
    app.post("/employee", employeeControllers.createNewEmployee);
    app.get("/employee/:emp_id", employeeControllers.getOneEmployee);
    app.put("/employee/:emp_id", employeeControllers.updateEmployee);
    app.delete("/employee/:emp_id", employeeControllers.deleteEmployee);
};
exports.routes = routes;
