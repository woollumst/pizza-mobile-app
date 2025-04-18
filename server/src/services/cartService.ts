import { CartRepository } from '../repositories/cartRepository';

export class CartService {
  constructor(private cartRepository: CartRepository) {}

  async addItem(userId: number, menuItemId: number, quantity: number) {
    const existingItem = await this.cartRepository.findCartItem(userId, menuItemId);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      await this.cartRepository.updateCartItemQuantity(existingItem.id, newQuantity);
      return { ...existingItem.toJSON(), quantity: newQuantity };
    }

    const newItem = await this.cartRepository.createCartItem(userId, menuItemId, quantity);
    return newItem;
  }

  async getCart(userId: number) {
    return await this.cartRepository.findCartByUserId(userId);
  }

  async updateItemQuantity(userId: number, itemId: number, quantity: number) {
    await this.cartRepository.updateCartItemQuantity(itemId, quantity);
    return { id: itemId, quantity };
  }

  async removeItem(userId: number, itemId: number) {
    await this.cartRepository.deleteCartItem(itemId);
  }
}