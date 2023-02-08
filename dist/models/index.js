"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../.env" });
const config_1 = require("../config/config");
const employee_1 = __importDefault(require("./employee"));
const Sequelize = require("sequelize");
const env = "development";
exports.config = config_1.allConfig[env];
// const db: { [key: string]: sequelizePackage.Sequelize } = {};
const sequelize = new Sequelize(exports.config.database, exports.config.username, exports.config.password, exports.config);
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
