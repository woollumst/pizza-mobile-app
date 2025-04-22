// Checking out cart. Submitting payment, pushing order to business 
import { Router } from 'express';
import { OrderController } from '../controllers/orderController';

const orderRoutes = Router();
const orderController = new OrderController();

// Post /               new order from Cart
orderRoutes.post('/', async (req, res) => orderController.createOrder(req, res));
// Get /:id             get order details
orderRoutes.get('/:id', async (req, res) => orderController.getOrder(req, res));
// Get /user/:userId    get user's order history
orderRoutes.get('/user/:userId', async (req, res) => orderController.getUserOrderHistory(req, res));
// Get /all             view all orders, admin
orderRoutes.get('/all', async (req, res) => orderController.getAllOrders(req, res));
// Put /:id/status      update order status, admin
orderRoutes.put('/:id/status', async (req, res) => orderController.updateOrderStatus(req, res));

export default orderRoutes;