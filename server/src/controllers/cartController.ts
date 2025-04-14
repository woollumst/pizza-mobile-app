/* import { Request, Response } from 'express';
import cartService from '../services/cartService';

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const cart = await cartService.getCart(req.user.id); // Assuming the user ID is stored on the request
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart', error });
  }
};

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  const { menuItemID, quantity } = req.body;
  try {
    const result = await cartService.addItem(req.user.id, menuItemID, quantity);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to cart', error });
  }
};

export const updateCartItem = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const updatedItem = await cartService.updateItemQuantity(req.user.id, parseInt(id), quantity);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update cart item', error });
  }
};

export const removeCartItem = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await cartService.removeItem(req.user.id, parseInt(id)); // Ensure the ID is parsed correctly
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item from cart', error });
  }
};
 */