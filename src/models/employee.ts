import { Sequelize } from "sequelize";
import { SequelizeMethod } from "sequelize/types/utils";

export default function initEmployeesModel(
  sequelize: Sequelize,
  DataTypes: any
) {
  return sequelize.define(
    "employees",
    {
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
    },
    {
      timestamps: false,
    }
  );
}
