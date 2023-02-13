"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class department extends sequelize_1.Model {
}
function initDepartmentsModel(sequelize, DataTypes) {
    return department.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: DataTypes.INTEGER,
        },
        department: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
    }, {
        sequelize,
        modelName: "departments",
        timestamps: false,
    });
}
exports.default = initDepartmentsModel;
