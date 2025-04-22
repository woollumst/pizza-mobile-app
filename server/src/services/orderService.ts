import { OrderRepository } from '../repositories/orderRepository';

export class OrderService {
    constructor(private orderRepository: OrderRepository) {}

    async createOrder(){

    }

    async getOrder(){

    }

    async getUserOrderHistory(){

    }

    async getAllOrders(){
        
    }

    async updateOrderStatus(orderId: number, newOrderStatus: string){

    }
}