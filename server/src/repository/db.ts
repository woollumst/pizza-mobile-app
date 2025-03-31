import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connected to Database!');
    } catch (error) {
        console.error('Failed to connect to Database!');
    }
};

testConnection;

export default sequelize;