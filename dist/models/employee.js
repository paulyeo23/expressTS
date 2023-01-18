"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initEmployeesModel(sequelize, DataTypes) {
    return sequelize.define("employees", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: DataTypes.INTEGER,
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
        department: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
}
exports.default = initEmployeesModel;
