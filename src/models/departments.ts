import { Model, Sequelize } from "sequelize";

class department extends Model {
  declare id: number;
  declare department: string;
}

export default function initDepartmentsModel(
  sequelize: Sequelize,
  DataTypes: any
) {
  return department.init(
    {
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
    },
    {
      sequelize,
      modelName: "departments",
      timestamps: false,
    }
  );
}
