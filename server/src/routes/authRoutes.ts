// Manage logging in, registering, etc
import { Router } from "express";
import { AuthController } from "../controllers/authController";

const authRoutes = Router();
const authController = new AuthController();

// Might rework after taking a look at Firebase Authentication for logging in with socials

// Post /register
authRoutes.post('/register', async (req, res) => authController.register(req, res));

// Post /login
authRoutes.post('/login', async (req, res) => authController.login(req, res));

export default authRoutes;