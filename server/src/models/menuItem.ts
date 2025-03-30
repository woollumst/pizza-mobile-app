import { Model, DataTypes } from 'sequelize';
import sequelize from '../repository/sequelize';

class MenuItem extends Model {
    public id!: number;
    public name!: string;
    public description!: string | null; // Optional description
    public price!: number;
    public category!: string;  // For sorting when displaying full menu
    //public imagelink!: string | null; // nullable so we can add items before getting pictures. Can add placeholder picture on frontend perhaps
}

MenuItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {

        },
        description: {
            
        },
        price: {

        },
        category: {

        },
    },
    {
        sequelize,
        tableName: 'menuItems',
    }
);

export default MenuItem;
// optionally, maybe add field like "availability" so items marked out of stock can be disabled