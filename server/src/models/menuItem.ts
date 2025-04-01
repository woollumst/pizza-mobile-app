import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../repository/db';

// const sequelize = new Sequelize( ... )

class MenuItem extends Model<InferAttributes<MenuItem>, InferCreationAttributes<MenuItem>> {
    declare itemId: CreationOptional<number>;
    declare itemName: string;
    declare description: CreationOptional<string>; // Optional description
    declare price: number;
    declare category: string;  // For sorting when displaying full menu
    declare createdAt: Date;
    declare updatedAt: Date;
    //declare imagelink: string | null; // nullable so we can add items before getting pictures. Can add placeholder picture on frontend perhaps
    // optionally, maybe add field like "availability" so items marked out of stock can be disabled

    /*
    declare static associations: {
        projects: Association<UserActivation, Project>;
    }
    */
}

/*  // other way to add associations?
    X.belongsTo(Y); // where X has a foreign key field that should contain a value from Y 
    X.hasMany(Y, {  // 
        sourceKey: 'id',
        foreignKey: 'ownerId',
        as: 'Ys' // name in associations
    });
*/

MenuItem.init(
    {
        itemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        itemName: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
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

MenuItem.sync();

export default MenuItem;