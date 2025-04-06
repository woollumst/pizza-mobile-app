import MenuItem from "../models/MenuItem";
import { menuRepository } from "../repository/menuRepository";

export class menuService {
    constructor(private menuRepository: menuRepository) {} // prep dependency injection for mocks/testing

    async getMenu() { // TEST
        try{
            const result = await menuRepository.getMenu();
            return {
                success: true,
                message: 'Menu fetched successfully',
                menuArray: result,
            }
        } catch (error) {
            console.error('getMenu error: ', error);
            return {
                success: false, 
                message: 'Internal server error'
            }
        }
    }

    async getMenuItem(itemId: number) { // TEST
        try{
            const result = await menuRepository.getMenuItem(itemId);
            return {
                success: true,
                message: 'Menu item fetched successfully',
                menuItem: result,
            }
        } catch (error) {
            console.error('getMenuItem error: ', error);
            return {
                success: false, 
                message: 'Internal server error'
            }
        }
    }

    async createMenuItem(newItem: MenuItem) { // TODO
        try { // old ? review, refactor
            const result = await menuRepository.createMenuItem(newItem);
            return {
                success: true,
                message: 'Menu item created successfully',
                menuItem: result,
            }
        } catch (error) {
            console.error('createMenuItem error: ', error);
            return {
                success: false, 
                message: 'Internal server error'
            }
        }
    }

    async updateMenuItem(updatedItem: MenuItem) { // TODO
        try{
            const result = await menuRepository.updateMenuItem(updatedItem);
            return {
                success: true,
                message: 'Menu item updated successfully',
                menuItem: result,
            }
        } catch (error) {
            console.error('updateMenuItem error: ', error);
            return {
                success: false, 
                message: 'Internal server error'
            }
        }
    }

    async deleteMenuItem(itemId: number) { // TODO
        try{
            const result = await menuRepository.deleteMenuItem(itemId);
            if (result) {
                return {
                    success: true,
                    message: 'Menu item deleted successfully',
                }
            } else {
                return {
                    success: false,
                    message: 'Item to delete is null!',
                }
            }
        } catch (error) {
            console.error('deleteMenuItem error: ', error);
            return {
                success: false, 
                message: 'Internal server error'
            }
        }
    }
}