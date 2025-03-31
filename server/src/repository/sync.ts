import sequelize from './db';
// import models here
// import User from '../models/User';
import MenuItem from '../models/MenuItem';

const syncDatabase = async () => {
    try {
        await MenuItem.sync();
        await sequelize.sync({ force: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();