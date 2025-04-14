import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/User"; // Refactor for User Model?
import { AuthRepository } from "../repositories/authRepository";

const JWT_SECRET = process.env.JWT_SECRET as string;

export class AuthService {
    constructor(private authRepository: AuthRepository) {}

    async register(username: string, password: string) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.authRepository.register(username, hashedPassword);
            const token = await this.getToken(user);
            return {
                success: true,
                message: 'Registration Successful!',
                user: user,
                token: token,
            }
        } catch (error) {
            console.error('Registration Error: ', error);
            return {
                success: false,
                message: 'Internal Server Error',
            }
        }
    }


    async checkPassword(user: User, password: string) { 
        return await bcrypt.compare(password, user.hashedPassword);
    }

    getToken(user: User) {
        return jwt.sign(
            { userName: user.userName },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
    }

    async login(username: string, password: string) {
        try {
            const user = await this.authRepository.getByUsername(username);
            if(!user)
                return { message: 'Invalid username or password' };

            const isMatch = await this.checkPassword(user, password);
            if(!isMatch)
                return { message: 'Invalid username or password' };

            const token = await this.getToken(user);
            return{
                success: true,
                message: 'Login Successful!',
                user: user,
                token,
            };
        } catch (error) {
            console.error('Error Logging In: ', error);
            return {
                success: false,
                message: 'Internal Server Error',
            }
        }
    }
}