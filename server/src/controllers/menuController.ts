import { Request, Response } from 'express';
import { MenuService } from '../services/menuService';
import { MenuRepository } from '../repositories/menuRepository';

export class MenuController {
    private menuService: MenuService; // Dependency Injection : Inject Service object

    constructor(menuService?: MenuService) { // Dependency Injection : Inject Repository obj into Service obj
        this.menuService = menuService || new MenuService(new MenuRepository());
    }

    // GET FULL MENU
    async getMenu(req: Request, res: Response) {
        try{
            const result = await this.menuService.getMenu();
            if(!result.success){
                res.status(404).json({ error: 'Failed to fetch Menu' });
            }
            res.status(200).json({
                success: true,
                menu: result.menu,
            });
        } catch (error) {
            console.log('Server error with fetching Menu');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Fetch Menu',
             });
        }
    }

    // GET SPECIFIC MENU ITEM
    async getMenuItem(req: Request, res: Response) {
        try{
            const menuItem = req.body;
            const result = await this.menuService.getMenuItem(menuItem.itemId);
            if(!result.success){
                res.status(404).json({ error: 'Failed to fetch Menu Item' });
            }
            res.status(200).json({
                success: true,
                menuItem: result.menuItem, // Return specified MenuItem
            });
        } catch (error) {
            console.log('Server error with fetching Menu Item');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Fetch Menu Item',
             });        }
    }

    // ***************************************************
    //  ADMIN COMMANDS
    // ***************************************************
    // CREATE MENU ITEMS
    async createMenuItem(req: Request, res: Response) {
        try{
            const menuItem = req.body;
            const result = await this.menuService.createMenuItem(menuItem);
            if(!result.success){
                res.status(404).json({ error: 'Failed to create Menu Item' });
            }
            res.status(200).json({
                success: true,
                menuItem: result.menuItem, // Return created MenuItem
            });
        } catch (error) {
            console.log('Server error with creating Menu Item');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Create Menu Item',
             });        }
    }

    // UPDATE / EDIT MENU ITEMS
    async updateMenuItem(req: Request, res: Response) {
        try{
            const menuItem = req.body;
            const result = await this.menuService.updateMenuItem(menuItem);
            if(!result.success){
                res.status(404).json({ error: 'Failed to update Menu Item' });
            }
            res.status(200).json({
                success: true,
                menuItem: result.menuItem, // Return updated MenuItem
            });
        } catch (error) {
            console.log('Server error with updating Menu Item');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Update Menu Item',
             });        }
    }

    // DELETE MENU ITEMS
    async deleteMenuItem(req: Request, res: Response) {
        try{
            const itemToDelete = req.body; // Recieve MenuItem obj to delete
            const result = await this.menuService.deleteMenuItem(itemToDelete.itemId);
            res.status(200).json({ message: 'Item Deleted Successfully'});
        } catch (error) {
            console.log('Server error with deleting Menu Item');
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Internal Server Error',
                error: 'Failed to Delete Menu Item',
             });        }
    }
}