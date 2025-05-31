import OrderItem from '../models/OrderItem';

export class OrderItemRepository {
    async getOrderItems(orderId: number) {
        try{
            const orderItems = await OrderItem.findAll({
                where: { orderId: orderId },
            }); // Return one menu item by Primary Key (ID)
            return orderItems;
        } catch (error) {
            console.error('Database error, failed to get Order Items');
            throw new Error('Database getMenuItem query failed');
        }
    }
}5