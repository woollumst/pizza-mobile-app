import sequelize from './sequelize';
// import models here
// import User from '../models/User';
import MenuItem from '../models/menuItem';

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();