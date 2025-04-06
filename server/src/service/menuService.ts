import MenuItem from "../models/MenuItem";
import { menuRepository } from "../repository/menuRepository";

export class menuService {
    constructor(menuRepository: menuRepository) {}, // prep dependency injection for mocks/testing

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
            return (success: false, message: 'Internal server error'); 
        }
    },

    async getMenuItem() { // TEST
        try{
            const result = await menuRepository.getById();
            return {
                success: true,
                message: 'Menu item fetched successfully',
                menuItem: result,
            }
        } catch (error) {
            console.error('getMenuItem error: ', error);
            return (success: false, message: 'Internal server error'); 
        }
    },

    async createMenuItem(newItem: MenuItem) { // TODO
        try { // old ? review, refactor
            const newMenuItem = MenuItem.build({ 
                itemName: newItem.itemName, 
                // description: newItem.description || null, 
                price: newItem.price, 
                category: newItem.category,
                createdAt: newItem.createdAt,
                updatedAt: newItem.updatedAt,
            });
            return menuRepository.createMenuItem(newMenuItem);
        } catch (error) {
            
        }
    },

    async updateMenuItem() { // TODO
        try{
            
            }
        } catch (error) {
            console.error('updateMenuItem error: ', error);
            return (success: false, message: 'Internal server error'); 
        }
    },

    async deleteMenuItem() { // TODO
        try{
            
            }
        } catch (error) {
            console.error('deleteMenuItem error: ', error);
            return (success: false, message: 'Internal server error'); 
        }
    }
}