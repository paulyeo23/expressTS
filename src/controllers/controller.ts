import { services } from "../service/service";

import express from "express";

import {
  crud as crudType,
  employeeData,
  newEmployeeData,
} from "../interfaces/interfaces";

const controllerRedirect: Function = (
  request: express.Request,
  response: express.Response
): object => {
  const getAllEmployees: Function = (
    request: express.Request,
    response: express.Response
  ): void => {
    try {
      response.status(200).json(services.getAllEmployees());
    } catch {
      response.status(500).json({ errormessage: "Server error" });
    }
  };

  const createNewEmployee: Function = (
    request: express.Request,
    response: express.Response
  ): void => {
    try {
      const newEmployeeData: newEmployeeData = request.body;
      const result: employeeData = services.createNewEmployee(newEmployeeData);
      response.status(200).json(result);
    } catch {
      response.status(400).json({ "error message": "bad request" });
    }
  };

  const getOneEmployee: Function = (
    request: express.Request,
    response: express.Response
  ): void => {
    try {
      const idRequest: number = Number(request.params.emp_id);
      const result: employeeData = services.getOneEmployee(idRequest);
      if (result == undefined) {
        response.status(404).json({ errorMessage: "Not Found" });
      } else {
        response.status(200).json(result);
      }
    } catch {
      response.status(500).json({ errormessage: "Server error" });
    }
  };

  const updateEmployee: Function = (
    request: express.Request,
    response: express.Response
  ): void => {
    try {
      try {
        const updatedId: number = Number(request.params.emp_id);
        const updatedEntry: newEmployeeData = request.body;
        try {
          const result: employeeData = services.updateEmployee(
            updatedId,
            updatedEntry
          );
          response.status(200).json(result);
        } catch {
          response.status(400).json({ errormessage: "Not Found" });
        }
      } catch {
        response.status(404).json({ errormessage: "Bad Request" });
      }
    } catch {
      response.status(500).json({ errormessage: "Server error" });
    }
  };

  const deleteEmployee: Function = (
    request: express.Request,
    response: express.Response
  ): void => {
    try {
      try {
        const deletedId: number = Number(request.params.emp_id);
        services.deleteEmployee(deletedId);
        response.status(204);
      } catch {
        response.status(404).json({ errormessage: "Not found" });
      }
    } catch {
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

export const controller: crudType = controllerRedirect();
