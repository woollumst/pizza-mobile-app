/* import { Router } from 'express';
import { addToCart, getCart, updateCartItem, removeCartItem } from '../controllers/cartController';
import authMiddleware from '../middleware/authMiddleware'; // Ensure you're importing authentication middleware

const router = Router();

// Route to fetch the user's cart
router.get('/', authMiddleware, getCart); // Assumes you need authentication to get the cart

// Route to add a menuItem to the cart
router.post('/add', authMiddleware, addToCart);

// Route to update the quantity of an item in the cart
router.put('/update/:id', authMiddleware, updateCartItem);

// Route to remove a menuItem from the cart
router.delete('/remove/:id', authMiddleware, removeCartItem);

export default router;
 */