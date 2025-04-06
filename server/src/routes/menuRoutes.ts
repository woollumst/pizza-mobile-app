// Managing menuItems. Viewing menu, handling item info when requested etc
import express from "express";
import { menuService } from “../service/menuService”;
// import authenticate from "../middleware/authMiddleware";

const menuRoutes = express.Router();

// /menu endpoints ( hostname/menu/:id )
// Get /                Get full menu
menuRoutes.get(‘/’, async (req, res) => {
// May need to refactor for TS Sequelize
try{
        const result = await menuService.getMenu();
        if(!result.success){
            res.status(404).json({ error: 'Failed to fetch menu items' });
        }
        const menu = result.menuArray;
        res.status(200).json({
            success: true,
            menu: menu.map(menuItem => ({
                itemId: menuItem.itemId,
                itemName: menuItem.itemName,
                description: menuItem.description,
                price: menuItem.price,
                category: menuItem.category,
                createdAt: menuItem.createdAt,
                updatedAt: menuItem.updatedAt,
            }))
        }); // Need to test
    } catch (error) {
        console.log('Server error with fetching menu');
        console.error(error);
        res.status(500).json({ success: false, message: 'Error getting menu', error: 'Failed to get menu items' });
    }
*/
});

// Get /:id             Get one item from menu
menuRoutes.get(‘/:id’, async (req, res) => {

});

// Admin Commands (Implement Role-Based Access Control)
// Post /:id            Add new item (ADMIN)
menuRoutes.post(‘/:id’, async (req, res) => {

});

// Put /:id             Update item (ADMIN)
menuRoutes.put(‘/:id’, async (req, res) => {

});

// Delete /:id          Delete item (ADMIN) (add confirmation dialogue, maybe undo button)
menuRoutes.delete(‘/:id’, async (req, res) => {

});

export default menuRoutes;