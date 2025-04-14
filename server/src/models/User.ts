import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../repositories/db";
import Order from "./Order";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare userName: string;
    declare hashedPassword: string;
    // declare email: string;
    // declare passwordHash: string; // ** TODO ** : SET UP PASSWORD HASHING
    // Foreign Keys managed with Associations
}

User.init(
    {
        // userId: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        // },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // email: {
        //     type: DataTypes.STRING,
        // },
    },
    {
        tableName: 'Users',
        timestamps: true,
        sequelize,
    },
);

export default User;