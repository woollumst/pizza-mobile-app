/* import cartRepository from '../repositories/cartRepository';

const cartService = {
  async addItem(userId: number, menuItemId: number, quantity: number) {
    const existingItem = await cartRepository.findCartItem(userId, menuItemId);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      await cartRepository.updateCartItemQuantity(existingItem.id, newQuantity);
      return { ...existingItem.toJSON(), quantity: newQuantity };
    }

    const newItem = await cartRepository.createCartItem(userId, menuItemId, quantity);
    return newItem;
  },

  async getCart(userId: number) {
    return await cartRepository.findCartByUserId(userId);
  },

  async updateItemQuantity(userId: number, itemId: number, quantity: number) {
    await cartRepository.updateCartItemQuantity(itemId, quantity);
    return { id: itemId, quantity };
  },

  async removeItem(userId: number, itemId: number) {
    await cartRepository.deleteCartItem(itemId);
  },
};

export default cartService;
 */