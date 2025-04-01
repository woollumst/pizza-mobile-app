import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../repository/db";
import Order from "./Order";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare userId: CreationOptional<number>;
    declare userName: string;
    declare email: string;
    // declare passwordHash: string; // ** TODO ** : SET UP PASSWORD HASHING
    declare createdAt: Date;
    // Foreign Keys managed with Associations
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
    },
    {
        tableName: 'Users',
        sequelize,
    },
);

export default User;