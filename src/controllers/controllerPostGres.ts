import employeeFunctions from "../service/sequelizeService";

import express from "express";

import { employeeData, newEmployeeData } from "../interfaces/interfaces";
import { Model } from "sequelize";
import jwt from "jsonwebtoken";

const employeeServices = employeeFunctions();

export const controllerFunctions = () => {
  const getAllEmployees = async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    let token: string = "";
    if (request.headers?.authorization?.startsWith("Bearer ")) {
      token = request.headers.authorization.substring(
        7,
        request.headers.authorization.length
      );
    }
    console.log(request.headers.authorization);

    try {
      if (token == "") {
        response.status(401).json({ errorMessage: "Please log in" });
      } else {
        try {
          const decoded = jwt.verify(token, employeeServices.secret) as {
            userId: number;
            departmentId: number;
          };
          response
            .status(200)
            .json(await employeeServices.getAllEmployees(decoded.departmentId));
        } catch {
          response.status(400).json({ errorMessage: "Invalid Token" });
        }
      }
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
    request: express.Request<{ emp_id: number }, any, newEmployeeData>,
    response: express.Response
  ): Promise<void> => {
    try {
      try {
        const updatedId = request.params.emp_id;
        const updatedEntry = request.body;

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
    request: express.Request<{ emp_id: number }>,
    response: express.Response
  ): Promise<void> => {
    try {
      const deletedId: number = request.params.emp_id;
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

  const login = async (
    request: express.Request<any, any, { username: string; password: string }>,
    response: express.Response
  ): Promise<void> => {
    try {
      const dbResponse = await employeeServices.login(
        request.body.username,
        request.body.password
      );
      dbResponse == undefined
        ? response.status(401).json({ errorMessage: "Bad login" })
        : response.status(200).json({ token: dbResponse });
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
    login,
  };
};
