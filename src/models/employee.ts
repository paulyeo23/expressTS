import { Model, Sequelize } from "sequelize";

class employee extends Model {
  declare id: number;
  declare name: string;
  declare salary: number;
  declare department: { department: string };
}

export default function initEmployeesModel(
  sequelize: Sequelize,
  DataTypes: any
) {
  return employee.init(
    {
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
    },
    {
      sequelize,
      modelName: "employees",
      timestamps: false,
    }
  );
}
