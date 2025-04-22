import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';
import { OrderRepository } from '../repositories/orderRepository';

export class OrderController {
    private orderService: OrderService;

    constructor(orderService?: OrderService) {
        this.orderService = orderService || new OrderService(new OrderRepository());
    }

    async createOrder(req: Request, res: Response) {
        try{
            const { newOrder } = req.body;
            const result = await this.orderService.createOrder(newOrder);

            if(!result.success)
                res.status(404).json({ error: 'Failed to create Order' });
            
            res.status(200).json({
                success: true,
                order: result.order
            });
        } catch (error) {
            console.log('Server error with creating Order');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Create Order',
             });
        }
    }

    async getOrder(req: Request, res: Response) {
        try{
            const { newOrder } = req.body;
            const result = await this.orderService.createOrder(newOrder);

            if(!result.success)
                res.status(404).json({ error: 'Failed to create Order' });
            
            res.status(200).json({
                success: true,
                order: result.order
            });
        } catch (error) {
            console.log('Server error with creating Order');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Create Order',
             });
        }
    }

    async getUserOrderHistory(req: Request, res: Response) {

    }

    async getAllOrders(req: Request, res: Response) {

    }

    async updateOrderStatus(req: Request, res: Response) {

    }
}