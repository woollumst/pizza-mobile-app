import { Router } from 'express';
import { CartController } from '../controllers/cartController';

const cartRoutes = Router();
const cartController = new CartController();

// Route to fetch the user's cart
cartRoutes.get('/', async (req, res) => cartController.getCart(req, res)); // Assumes you need authentication to get the cart

// Route to add a menuItem to the cart
cartRoutes.post('/add', async (req, res) => cartController.addToCart(req, res));

// Route to update the quantity of an item in the cart
cartRoutes.put('/update/:id', async (req, res) => cartController.updateCartItem(req, res));

// Route to remove a menuItem from the cart
cartRoutes.delete('/remove/:id', async (req, res) => cartController.removeCartItem(req, res));

export default cartRoutes;