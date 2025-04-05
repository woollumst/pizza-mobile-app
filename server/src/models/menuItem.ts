import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../repository/db';
import Cart from './Cart';
import OrderItem from './OrderItem';

// const sequelize = new Sequelize( ... )

class MenuItem extends Model<InferAttributes<MenuItem>, InferCreationAttributes<MenuItem>> {
    declare itemId: CreationOptional<number>;
    declare itemName: string;
    // declare description: CreationOptional<string>; // Optional description
    declare price: number;
    declare category: string;  // For sorting when displaying full menu
    declare createdAt: Date;
    declare updatedAt: Date;
    //declare imagelink: string | null; // nullable so we can add items before getting pictures. Can add placeholder picture on frontend perhaps
    // optionally, maybe add field like "availability" so items marked out of stock can be disabled

   // Foreign Keys managed with Associations
}

MenuItem.init(
    {
        itemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // description: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: null,
        // },
        price: {
            type: DataTypes.DECIMAL(10,2),
        },
        category: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'MenuItems',
        sequelize,
    },
);

export default MenuItem;