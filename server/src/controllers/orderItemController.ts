import { Request, Response } from 'express';
import { OrderItemService } from '../services/orderItemService';
import { OrderItemRepository } from '../repositories/orderItemRepository';

export class OrderItemController {
    private orderItemService: OrderItemService;

    constructor(orderItemService?: OrderItemService) {
        this.orderItemService = orderItemService || new OrderItemService(new OrderItemRepository());
    }

    async getOrderItems(req: Request, res: Response) {
        try{
            const { orderId } = req.params;
            const result = await this.orderItemService.getOrderItems(orderId);

            if(!result.success)
                res.status(404).json({ error: 'Failed to fetch Order Items' });
            
            res.status(200).json({
                success: true,
                orderItems: result.orderItems
            });
        } catch (error) {
            console.log('Server error with fetching Order Items');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Fetch Order Items',
             });
        }
    }
}