import { Router } from "express";
import { Request, Response } from "express";
import { controllerFunctions } from "../controllers/controllerPostGres";
import { crud as crudType } from "../interfaces/interfaces";
import { Express, Application } from "express";

// {
//     getAllEmployee,
//     createEmployee,
//     getOneEmployee,
//     updateEmployee,
//     deleteEmployee,
//   }
const employeeControllers = controllerFunctions();

export const routes = (app: Application) => {
  app.get("/employee", employeeControllers.getAllEmployees);
  app.get("/departments", employeeControllers.getAllDepartments);
  app.post("/employee", employeeControllers.createNewEmployee);
  app.get("/employee/:emp_id", employeeControllers.getOneEmployee);
  app.put("/employee/:emp_id", employeeControllers.updateEmployee);
  app.delete("/employee/:emp_id", employeeControllers.deleteEmployee);
  app.post("/login", employeeControllers.login);
};
