import employeeFunctions from "../service/sequelizeService";

import express from "express";

import {
  crud as crudType,
  employeeData,
  newEmployeeData,
} from "../interfaces/interfaces";
import { Model } from "sequelize";

const employeeServices = employeeFunctions();

export const controllerFunctions = () => {
  const getAllEmployees = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      response.status(200).json(await employeeServices.getAllEmployees());
    } catch {
      response.status(500).json({ errorMessage: "Server error" });
    }
  };

  const getAllDepartments = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      response.status(200).json(await employeeServices.getAllDepartments());
    } catch {
      response.status(500).json({ errorMessage: "Server error" });
    }
  };

  const createNewEmployee = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      const newEmployeeData: newEmployeeData = request.body;
      const result: Model<employeeData> =
        await employeeServices.createNewEmployee(newEmployeeData);
      response.status(200).json(result);
    } catch {
      response.status(400).json({ errorMessage: "bad request" });
    }
  };

  const getOneEmployee = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      const idRequest: number = Number(request.params.emp_id);
      const result: Model<employeeData> | null =
        await employeeServices.getOneEmployee(idRequest);
      if (result == null) {
        response.status(404).json({ errorMessage: "Not Found" });
      } else {
        response.status(200).json(result);
      }
    } catch {
      response.status(500).json({ errorMessage: "Server error" });
    }
  };

  const updateEmployee = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      try {
        const updatedId: number = Number(request.params.emp_id);
        const updatedEntry: newEmployeeData = request.body;

        const result: [affectedcount: number] =
          await employeeServices.updateEmployee(updatedId, updatedEntry);
        if (result[0] == 0) {
          response.status(400).json({ errorMessage: "Not Found" });
        } else {
          response
            .status(200)
            .json(Object.assign({ id: updatedId }, updatedEntry));
        }
      } catch {
        response.status(404).json({ errorMessage: "Bad Request" });
      }
    } catch {
      response.status(500).json({ errorMessage: "Server error" });
    }
  };

  const deleteEmployee = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      const deletedId: number = Number(request.params.emp_id);
      const results: number = await employeeServices.deleteEmployee(deletedId);
      if (results > 0) {
        response.status(204).json();
      } else {
        response.status(404).json({ errorMessage: "Not found" });
      }
    } catch {
      response.status(500).json({ errorMessage: "Server error" });
    }
  };

  return {
    getAllEmployees,
    getAllDepartments,
    createNewEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
  };
};
