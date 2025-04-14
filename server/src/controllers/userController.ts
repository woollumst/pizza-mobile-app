import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { UserRepository } from '../repositories/userRepository';

export class UserController {
    private userService: UserService;

    constructor(userService?: UserService) {
        this.userService = userService || new UserService(new UserRepository());
    }

    async getAllUsers( req: Request, res: Response) {
        
    }

    async getUserById( req: Request, res: Response) {

    }

    async updateUserInfo( req: Request, res: Response) {

    }

    async deletUser( req: Request, res: Response) {

    }
}