import sequelize from './db';
// import models here
// import User from '../models/User';
import MenuItem from '../models/MenuItem';
import Cart from '../models/Cart';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import User from '../models/User';

// Associations :
// Cart gets a MenuItem Foreign Key
Cart.belongsTo(MenuItem);
MenuItem.hasMany(Cart);

// OrderItem gets a MenuItem Foreign Key
MenuItem.hasMany(OrderItem);
OrderItem.belongsTo(MenuItem);
// OrderItem gets an Order Foreign Key
OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);

// Order gets User Foreign Key
Order.belongsTo(User);
User.hasMany(Order);

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();