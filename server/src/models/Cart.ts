import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import sequelize from "../repositories/db";
import MenuItem from "./MenuItem";

class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare cartId: CreationOptional<number>;
    declare quantity: number;
    // Foreign Keys managed with Associations
    // Cart gets a MenuItem Foreign Key
}

Cart.init(
    {
        cartId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
/*         menuItemId: { 
            type: DataTypes.INTEGER, 
            allownNull: false 
        },
        userId: { 
            type: DataTypes.INTEGER, 
            allownNull: false
        }, */
        quantity: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: 'Carts',
        sequelize
    },
);

export default Cart;