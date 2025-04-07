// Managing menuItems. Viewing menu, handling item info when requested etc
import { Router } from "express";
import { MenuController } from "../controllers/menuController";
// import authenticate from "../middleware/authMiddleware";

const menuRoutes = Router();
const menuController = new MenuController();

// /menu endpoints 
// (example: ${hostname}/menu/:id )

// Get /                Get full menu
menuRoutes.get('/', async (req, res) => menuController.getMenu(req, res));

// Get /:id             Get one item from menu
menuRoutes.get('/:id', async (req, res) => menuController.getMenuItem(req, res));

// ADMIN COMMANDS
// (Implement Role-Based Access Control)

// Post /:id            Add new item (ADMIN)
menuRoutes.post('/:id', async (req, res) => menuController.createMenuItem(req, res));

// Put /:id             Update item (ADMIN)
menuRoutes.put('/:id', async (req, res) => menuController.updateMenuItem(req, res));

// Delete /:id          Delete item (ADMIN) (add confirmation dialogue, maybe undo button)
menuRoutes.delete('/:id', async (req, res) => menuController.deleteMenuItem(req, res));

export default menuRoutes;