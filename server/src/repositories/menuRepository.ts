import MenuItem from '../models/MenuItem';

export class MenuRepository {
    // Get all Menu Items
    async getMenu(){
        try{
            const fullMenu = await MenuItem.findAll();  // Return all Menu Items (Full Menu)
            return fullMenu;
        } catch (error) {
            console.error('Database error, failed to get Menu');
            throw new Error('Database getMenu query failed');
        }
    }
    // Get one Menu Item by Id
    async getMenuItem(itemId: number){
        try{
            const menuItem = await MenuItem.findByPk(itemId); // Return one menu item by Primary Key (ID)
            return menuItem;
        } catch (error) {
            console.error('Database error, failed to get Menu Item');
            throw new Error('Database getMenuItem query failed');
        }
    }
    // Admin Commands
    // Create Menu Item
     async createMenuItem(newMenuItem: MenuItem){
        try{
            await newMenuItem.save(); // Save new menu item
            return await newMenuItem.reload(); // Refresh with persisted data, return new item from database
        } catch (error) {
            console.error('Database error, failed to create Menu Item');
            throw new Error('Database createMenuItem query failed');
        }
    }
    // Update a Menu Item by Id
    async updateMenuItem(updatedItem: MenuItem){
        try{
            await updatedItem.save();
            return await updatedItem.reload();
        } catch (error) {
            console.error('Database error, failed to update Menu Item');
            throw new Error('Database updateMenuItem query failed');
        }
    }
    // Delete a Menu Item by Id
    async deleteMenuItem(itemId: number){
        try{
            const itemToDelete = await this.getMenuItem(itemId);
            if (itemToDelete) {
                await itemToDelete.destroy();
                return true;
            }
            console.error("itemToDelete cannot be null!");
            return false;
        } catch (error) {
            console.error('Database error, failed to delete Menu Item');
            throw new Error('Database deleteMenuItem query failed');
        }
    }
}