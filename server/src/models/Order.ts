import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../repositories/db";
import User from "./User";
import OrderItem from "./OrderItem";

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare orderId: CreationOptional<number>;
    declare orderStatus: string; // Set up enums? PENDING, PREPARING, READY, DELIVERED, CANCELLED
    declare totalPrice: number; // Price at time of purchase
    declare createdAt: Date;
    declare updatedAt: Date;
    // Foreign Keys managed with Associations
    // Order gets User Foreign Key
}

Order.init(
    {
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderStatus: {
            type: DataTypes.STRING,
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10,2),
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'Orders',
        sequelize,
    },
);

export default Order;