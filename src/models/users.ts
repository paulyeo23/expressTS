import { Model, Sequelize } from "sequelize";

class user extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare departmentId: number;
}

export default function initUsersModel(sequelize: Sequelize, DataTypes: any) {
  return user.init(
    {
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
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );
}
