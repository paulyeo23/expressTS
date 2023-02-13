import { Model } from "sequelize";
import {
  newEmployeeData,
  employeeData,
  departmentData,
} from "../interfaces/interfaces";
import db from "../models/index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const employeeFunctions = () => {
  const secret =
    "fFV61G48Nwv2KaKn0wmE0aQNdurBt107o3nj7t9EFLoaK6NDHL1paHme8GuJfDhJIcib6OYBjwQl3i9fwdZsN5bSymhjGts7FBXI";

  const getAdminId = async (): Promise<number> => {
    const query = await db.departments.findAll({
      where: { department: "admin" },
    });
    return query[0].id;
  };

  const getAllEmployees = async (departmentId?: number) => {
    const adminId = await getAdminId();
    const employees = await db.employees.findAll({
      include: [
        {
          model: db.departments,
          attributes: ["department"],
          required: true,
        },
      ],
      order: [["id", "ASC"]],
      where: {
        departmentId:
          departmentId == adminId ? { [Op.not]: null } : departmentId,
      },
    });

    const result: employeeData[] = [];
    employees.forEach((employee) => {
      result.push({
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
        department: employee.department.department,
      });
    });

    return { employees: result };
  };

  const createNewEmployee = async (
    entry: newEmployeeData
  ): Promise<Model<employeeData>> => {
    return await db.employees.create({
      name: entry.name,
      salary: entry.salary,
      departmentId: entry.departmentId,
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
        departmentId: entry.departmentId,
      },
      { where: { id: id } }
    );
  };

  const deleteEmployee = async (id: number): Promise<number> => {
    return await db.employees.destroy({
      where: { id: id },
    });
  };

  const getAllDepartments = async () => {
    return {
      departments: await db.departments.findAll(),
    };
  };

  const login = async (
    username: string,
    password: string
  ): Promise<string | undefined> => {
    const checkPassword = async (
      password: string,
      hashedPassword: string
    ): Promise<boolean> => {
      const match = await bcrypt.compare(password, hashedPassword);
      return match;
    };
    const dbResult = await db.users.findOne({
      where: {
        username: username,
      },
    });

    let hashedPassword: string;
    dbResult == null
      ? (hashedPassword = "")
      : (hashedPassword = dbResult.password);
    if ((await checkPassword(password, hashedPassword)) == true) {
      const payload = {
        userId: dbResult?.id,
        departmentId: dbResult?.departmentId,
      };

      const token = jwt.sign(payload, secret, { expiresIn: "1h" });

      return token;
    } else {
      return;
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
    secret,
  };
};

export default employeeFunctions;
