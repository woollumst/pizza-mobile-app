import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { AuthRepository } from '../repositories/authRepository';

export class AuthController {
    private authService: AuthService; // Dependency Injection : Inject Service object

    constructor(authService?: AuthService) { // Dependency Injection : Inject Repository obj into Service obj
        this.authService = authService || new AuthService(new AuthRepository());
    }

    // REGISTER
    async register(req: Request, res: Response) {
        const { username, password } = req.body; // Collect user input from client
        
        try{
            const { success, message, user, token} = await this.authService.register(username, password);
            // Registration Failed
            if (!success){
                res.status(500).json({ 
                    success: false,
                    message: 'Registering User Failed',
                })
            }

            // Registering Successful
            res.status(201).json({ 
                success: success,
                message: message,
                user: user,
                token: token, // { success, message, user, token }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Error Registering User',
                error: 'Failed to Register',
             });
        }
    }

    //  LOGIN
    async login(req: Request, res: Response) {
        const { username, password } = req.body; // Collect user input from client
        
        try{
            const { success, message, user, token } = await this.authService.login(username, password);
            
            // Login Failed
            if (!success){
                res.status(500).json({ 
                    success: false,
                    message: message,
                })
            }
            
            // Login Successful
            res.json({ 
                success: success,
                message: message,
                user: user,
                token: token
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ 
                success: false,
                message: 'Error logging in',
                error: 'Failed to Login',
             });
        }
    }
}