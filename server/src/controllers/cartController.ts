import { Request, Response } from 'express';
import { CartService } from '../services/cartService';
import { CartRepository } from '../repositories/cartRepository';

export class CartController {
  private cartService: CartService; 

  constructor(cartService?: CartService) {
    this.cartService = cartService || new CartService(new CartRepository());
  }

  async getCart(req: Request, res: Response) {
    try {
      const cart = await this.cartService.getCart(req.user.id); // Assuming the user ID is stored on the request
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch cart', error });
    }
  }
  async addToCart(req: Request, res: Response): Promise<void> {
    const { menuItemID, quantity } = req.body;
    try {
      const result = await this.cartService.addItem(req.user.id, menuItemID, quantity);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add item to cart', error });
    }
  }
  
  async updateCartItem(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
      const updatedItem = await this.cartService.updateItemQuantity(req.user.id, parseInt(id), quantity);
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update cart item', error });
    }
  }
  
  async removeCartItem(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.cartService.removeItem(req.user.id, parseInt(id)); // Ensure the ID is parsed correctly
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove item from cart', error });
    }
  }
}
