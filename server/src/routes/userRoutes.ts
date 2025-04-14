// in app profile api. 
import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRoutes = Router();
const userController = new UserController();

// PROTECT ENDPOINT, ADD MIDDLEWARE
// Get /                fetch all users ** ADMIN **
userRoutes.get('/', async (req, res) => userController.getAllUsers(req, res));

// Get /:id             get one user
userRoutes.get('/:id', async (req, res) => userController.getUserById(req, res));
// Put /:id             update user info
userRoutes.put('/:id', async (req, res) => userController.updateUserInfo(req, res));
// Delete /:id          delete user
userRoutes.delete('/:id', async (req, res) => userController.deleteUser(req, res));

export default userRoutes;