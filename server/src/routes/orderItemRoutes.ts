import { Router } from 'express';
import { OrderItemController } from '../controllers/orderItemController';

const orderItemRoutes = Router();
const orderItemController = new OrderItemController();

// Route to get all order items for an order
orderItemRoutes.get('/:orderId', async (req, res) => orderItemController.getOrderItems(req, res));

// ???
// Is this all we need here? Revisit

export default orderItemRoutes;