import express from "express";

export enum departmentEnum {
  HR = "HR",
  PS = "PS",
}

export interface employeeData {
  id: number;
  name: string;
  salary: number;
  department: departmentEnum;
}

export interface newEmployeeData {
  name: string;
  salary: number;
  department: departmentEnum;
}

export interface Data {
  employees: employeeData[];
}

export interface crud {
  getAllEmployees: (
    request: express.Request,
    response: express.Response
  ) => Promise<void>;
  createNewEmployee: (
    request: express.Request,
    response: express.Response
  ) => Promise<void>;
  getOneEmployee: (
    request: express.Request,
    response: express.Response
  ) => Promise<void>;
  updateEmployee: (
    request: express.Request,
    response: express.Response
  ) => Promise<void>;
  deleteEmployee: (
    request: express.Request,
    response: express.Response
  ) => Promise<void>;
}
