"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class employee extends sequelize_1.Model {
}
function initEmployeesModel(sequelize, DataTypes) {
    return employee.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: DataTypes.INTEGER,
            key: "id",
        },
        name: {
            allowNull: false,
            unique: false,
            type: DataTypes.STRING,
        },
        salary: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: "employees",
        timestamps: false,
    });
}
exports.default = initEmployeesModel;
