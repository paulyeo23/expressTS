import { Model } from "sequelize";
import { newEmployeeData, employeeData } from "../interfaces/interfaces";
import db from "../models/index";

const employeeFunctions = () => {
  const getAllEmployees = async () => {
    return {
      employees: await db.employees.findAll(),
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

  return {
    getAllEmployees,
    createNewEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
  };
};
export default employeeFunctions;

// return {
//   getAllEmployees,
//   createNewEmployee,
//   getOneEmployee,
//   updateEmployee,
//   deleteEmployee,
// }
