import MenuItem from "../models/MenuItem";
import { menuRepository } from "../repository/menuRepository";

const menuService = {
    constructor(menuRepository: menuRepository) {}, // prep dependency injection for mocks/testing

    async getMenu() {
        // menuRepository.getMenu();
        // ES6 Example w/o sequelize?
        /*
        try{
            const result = await taskRepository.getTasks();
            return {
                success: true,
                message: 'Fetch tasks successful',
                tasks: result,
            };
        } catch (error) {
            console.error('getTasks error: ', error);
            return (success: false, message: 'Internal server error'); 
        }
        */
    },

    async getMenuItem() {
        try {

        } catch (error) {

        }
    },

    async createMenuItem(newItem: MenuItem) {
        try {
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
    async updateMenuItem() {
    
    },

    async deleteMenuItem() {

    }

}

export default menuService;