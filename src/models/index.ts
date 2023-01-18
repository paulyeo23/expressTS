import sequelizePackage from "sequelize";
import { Op } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import allConfig from "../../config/config";

import initEmployeesModel from "./employee";
const Sequelize = require("sequelize");

const env = "development";
export const config = allConfig[env];

// const db: { [key: string]: sequelizePackage.Sequelize } = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const db = {
  employees: initEmployeesModel(sequelize, Sequelize.DataTypes),
  sequelize: sequelize,
  Sequelize: Sequelize,
  Op: Op,
};
// db.employees = initEmployeesModel(sequelize, Sequelize.DataTypes);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.Op = Op;

export default db;
