"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class user extends sequelize_1.Model {
}
function initUsersModel(sequelize, DataTypes) {
    return user.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: DataTypes.INTEGER,
        },
        username: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            unique: false,
            type: DataTypes.STRING,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: {
                    tableName: "departments",
                },
            },
            key: "id",
        },
    }, {
        sequelize,
        modelName: "users",
        timestamps: false,
    });
}
exports.default = initUsersModel;
