import { OrderItemRepository } from '../repositories/orderItemRepository';

export class OrderItemService {
    constructor(private: orderItemRepository: OrderItemRepository) {}

    async getOrderItems(orderId: number){

    }
}