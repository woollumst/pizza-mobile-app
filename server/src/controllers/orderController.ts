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
            const { orderId } = req.params;
            const result = await this.orderService.getOrder(orderId);

            if(!result.success)
                res.status(404).json({ error: 'Failed to get order' });
            
            res.status(200).json({
                success: true,
                order: result.order
            });
        } catch (error) {
            console.log('Server error with getting Order');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Get Order',
             });
        }
    }

    async getUserOrderHistory(req: Request, res: Response) {
        try{
            const { userId } = req.params;
            const result = await this.orderService.getUserOrderHistory(userId);

            if(!result.success)
                res.status(404).json({ error: 'Failed to get user\'s order history' });
            
            res.status(200).json({
                success: true,
                orderList: result.orderList
            });
        } catch (error) {
            console.log('Server error with getting User Order History');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Get User Order History',
             });
        }
    }

    async getAllOrders(req: Request, res: Response) {
        try{
            const result = await this.orderService.getAllOrders();

            if(!result.success)
                res.status(404).json({ error: 'Failed to get all orders' });
            
            res.status(200).json({
                success: true,
                orderList: result.orderList
            });
        } catch (error) {
            console.log('Server error with getting All Orders');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Get All Orders',
             });
        }
    }

    async updateOrderStatus(req: Request, res: Response) {
        try{
            const { orderId } = req.params;
            const { newOrderStatus } = req.body;
            const result = await this.orderService.updateOrderStatus(orderId, newOrderStatus);

            if(!result.success)
                res.status(404).json({ error: 'Failed to update order status' });
            
            res.status(200).json({
                success: true,
                order: result.order // Return order with updated order status
            });
        } catch (error) {
            console.log('Server error with Updating Order Status');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Update Order Status',
             });
        }
    }
}