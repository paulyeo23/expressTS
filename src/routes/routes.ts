import { Router } from "express";
import { Request, Response } from "express";
import { controller } from "../controllers/controller";
import { crud as crudType } from "../interfaces/interfaces";
import { Express, Application } from "express";

// {
//     getAllEmployee,
//     createEmployee,
//     getOneEmployee,
//     updateEmployee,
//     deleteEmployee,
//   }

export const routes = (app: Application) => {
  app.get("/employee", controller.getAllEmployees);
  app.post("/employee", controller.createNewEmployee);
  app.get("/employee/:emp_id", controller.getOneEmployee);
  app.put("/employee/:emp_id", controller.updateEmployee);
  app.delete("/employee/:emp_id", controller.deleteEmployee);
};
