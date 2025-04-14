/* import Cart from '../models/Cart';
import MenuItem from '../models/MenuItem';
import { Op } from 'sequelize';

const cartRepository = {
  async findCartByUserId(userId: number) {
    return await Cart.findAll({
      where: { userId },
      include: MenuItem,
    });
  },

  async findCartItem(userId: number, menuItemId: number) {
    return await Cart.findOne({
      where: { userId, menuItemId },
    });
  },

  async createCartItem(userId: number, menuItemId: number, quantity: number) {
    return await Cart.create({
      userId,
      menuItemId,
      quantity,
    });
  },

  async updateCartItemQuantity(cartItemId: number, quantity: number) {
    return await Cart.update(
      { quantity },
      { where: { id: cartItemId } }
    );
  },

  async deleteCartItem(cartItemId: number) {
    return await Cart.destroy({
      where: { id: cartItemId },
    });
  },
};

export default cartRepository;
 */