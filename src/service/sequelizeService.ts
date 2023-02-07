import { Model } from "sequelize";
import { newEmployeeData, employeeData } from "../interfaces/interfaces";
import db from "../models/index";

const employeeFunctions = () => {
  const getAllEmployees = async (): Promise<{
    employees: Model<employeeData>[];
  }> => {
    return {
      employees: await db.employees.findAll({ order: [["id", "ASC"]] }),
    };
  };

  const createNewEmployee = async (
    entry: newEmployeeData
  ): Promise<Model<employeeData>> => {
    return await db.employees.create({
      name: entry.name,
      salary: entry.salary,
      department: entry.department,
    });
  };

  const getOneEmployee = async (
    idRequest: number
  ): Promise<Model<employeeData> | null> => {
    return await db.employees.findOne({
      where: { id: idRequest },
    });
  };

  const updateEmployee = async (
    id: number,
    entry: newEmployeeData
  ): Promise<[affectedcount: number]> => {
    return await db.employees.update(
      {
        name: entry.name,
        salary: entry.salary,
        department: entry.department,
      },
      { where: { id: id } }
    );
  };

  const deleteEmployee = async (id: number): Promise<number> => {
    return await db.employees.destroy({
      where: { id: id },
    });
  };

  const getAllDepartments = async (): Promise<{
    departments: Model<string>[];
  }> => {
    return {
      departments: await db.employees.findAll({
        attributes: ["department"],
        group: ["department"],
      }),
    };
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
export default employeeFunctions;
