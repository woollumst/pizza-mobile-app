import sequelize from './sequelize';
// import models here
// import User from '../models/User';

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}