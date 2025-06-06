import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../repositories/db";
import Order from "./Order";
import MenuItem from "./MenuItem";

class OrderItem extends Model<InferAttributes<OrderItem>, InferCreationAttributes<OrderItem>> {
    declare orderItemId: CreationOptional<number>;
    declare quantity: number;
    declare priceAtPurchase: number; // Price at time of purchase
    // Foreign Keys managed with Associations.
    // OrderItem gets a MenuItem Foreign Key
    // OrderItem gets an Order Foreign Key
}

OrderItem.init(
    {
        orderItemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
        priceAtPurchase: {
            type: DataTypes.DECIMAL(10,2),
        }
    },
    {
        tableName: 'OrderItems',
        sequelize,
    },
);

export default OrderItem;