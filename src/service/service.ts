import { employeeData, newEmployeeData, Data } from "../interfaces/interfaces";
import { crud as crudType } from "../interfaces/interfaces";
import path from "path";

const JSONAddress: string = path.resolve(__dirname, "../models/employee.json");
// const data: Data = require(JSONAddress);
import fs from "fs";
const rawData: string = fs.readFileSync(JSONAddress, "utf8");
const data: Data = JSON.parse(rawData);

const serviceFunctions: Function = (): {} => {
  const getAllEmployees = (): Array<employeeData> => {
    return data.employees;
  };

  const createNewEmployee = (entry: newEmployeeData): employeeData => {
    const newId: number = data.employees[data.employees.length - 1].id + 1;
    const newEntry: employeeData = Object.assign({ id: newId }, entry);
    data.employees.push(newEntry);
    fs.writeFileSync(JSONAddress, JSON.stringify(data));
    return newEntry;
  };

  const getOneEmployee = (idRequest: number): employeeData => {
    return data.employees.filter((employee) => {
      return employee.id == idRequest;
    })[0];
  };

  const updateEmployee = (
    updatedId: number,
    updatedEntry: newEmployeeData
  ): employeeData => {
    const id: number = data.employees.findIndex((employee) => {
      return employee.id == updatedId;
    });
    data.employees[id] = Object.assign({ id: updatedId }, updatedEntry);
    fs.writeFileSync(JSONAddress, JSON.stringify(data));
    return data.employees[id];
  };

  const deleteEmployee = (deletedId: number): number => {
    const index: number = data.employees.findIndex((employee) => {
      return employee.id == deletedId;
    });
    console.log(deletedId);
    if (index >= 0) {
      data.employees.splice(index, 1);
      fs.writeFileSync(JSONAddress, JSON.stringify(data));
    }
    return index;
  };

  return {
    getAllEmployees,
    createNewEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
  };
};

export const services: crudType = serviceFunctions();
