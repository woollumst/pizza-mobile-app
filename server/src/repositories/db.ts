import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
}); // For tests, use test env, so separate db can be used

const commonConfig = {
  dialect: process.env.DB_DIALECT as any,
  // models: [__dirname + '/../models'], // alternate ORM method? review, refactor?
  // logging: process.env.NODE_ENV !== 'test' // Logging when not in test env
};

const sequelize =
  process.env.DB_DIALECT === 'sqlite'
    ? new Sequelize({
        ...commonConfig,
        storage: process.env.DB_STORAGE || ':memory:'
      })
    : new Sequelize({
        ...commonConfig,
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