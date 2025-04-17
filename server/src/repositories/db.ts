import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
}); // For tests, use test env, so separate db can be used

const isTest = process.env.NODE_ENV === 'test';

const sequelize = isTest
  ? new Sequelize({
      dialect: 'sqlite',
      storage: process.env.DB_STORAGE || ':memory:',
      logging: false
    })
  : new Sequelize({
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connected to Database!');
    } catch (error) {
        console.error('Failed to connect to Database!');
    }
};

export default sequelize;