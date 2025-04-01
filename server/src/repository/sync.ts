import sequelize from './db';
// import models here
// import User from '../models/User';
import MenuItem from '../models/MenuItem';
import Cart from '../models/Cart';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import User from '../models/User';

// Associations :
Cart.belongsTo(MenuItem); // Cart gets MenuItem FK
MenuItem.hasMany(OrderItem); // OrderItem gets MenuItem FK
MenuItem.hasMany(Cart); // Cart gets MenuItem FK
Order.hasMany(OrderItem); // OrderItem gets Order FK
Order.belongsTo(User); // Order gets User FK
OrderItem.belongsTo(Order); // Gives OrderItem an Order Foreign Key
OrderItem.belongsTo(MenuItem); // Gives OrderItem a MenuItem Foreign Key
User.hasMany(Order); // Order gets User FK

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();