"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controller_1 = require("../controllers/controller");
// {
//     getAllEmployee,
//     createEmployee,
//     getOneEmployee,
//     updateEmployee,
//     deleteEmployee,
//   }
const routes = (app) => {
    app.get("/employee", controller_1.controller.getAllEmployees);
    app.post("/employee", controller_1.controller.createNewEmployee);
    app.get("/employee/:emp_id", controller_1.controller.getOneEmployee);
    app.put("/employee/:emp_id", controller_1.controller.updateEmployee);
    app.delete("/employee/:emp_id", controller_1.controller.deleteEmployee);
};
exports.routes = routes;
