import MenuItem from "../models/MenuItem";

export class menuRepository {
    // Get all Menu Items
    async getMenu(){
        return await MenuItem.findAll();
    }
    // Get one Menu Item by Id
    async getMenuItem(itemId: number){
        return await MenuItem.findByPk(itemId);
    }
    // Admin Commands
    // Create Menu Item
    async createMenuItem(newMenuItem: MenuItem){
        await newMenuItem.save();
    }
    // Update a Menu Item by Id
    async updateMenuItem(updatedItem: MenuItem){
        await updatedMenuItem.save();
    }
    // Delete a Menu Item by Id
    async deleteMenuItem(itemToDelete: MenuItem){
        await itemToDelete.destroy();
    }
}