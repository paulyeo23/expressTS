"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_js_1 = __importDefault(require("../config/config.js"));
const employee_1 = __importDefault(require("./employee"));
const Sequelize = require("sequelize");
const env = "development";
const config = config_js_1.default[env];
// const db: { [key: string]: sequelizePackage.Sequelize } = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {
    employees: (0, employee_1.default)(sequelize, Sequelize.DataTypes),
    sequelize: sequelize,
    Sequelize: Sequelize,
    Op: sequelize_1.Op,
};
// db.employees = initEmployeesModel(sequelize, Sequelize.DataTypes);
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.Op = Op;
exports.default = db;
