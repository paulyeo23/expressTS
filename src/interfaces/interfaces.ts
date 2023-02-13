import express from "express";

export enum departmentEnum {
  HR = "HR",
  PS = "PS",
}

export interface newEmployeeData {
  name: string;
  salary: number;
  departmentId: number;
}

export interface employeeData extends Omit<newEmployeeData, "departmentId"> {
  id: number;
  department: string;
}

export interface Data {
  employees: employeeData[];
}

export interface departmentData {
  id: number;
  department: string;
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
