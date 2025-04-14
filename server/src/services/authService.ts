import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// import User from "../models/User"; // Refactor for User Model?
import { AuthRepository } from "../repositories/menuRepository";

export class AuthService {
    constructor(private authRepository: AuthRepository) {}

    async register(username: String, password: String) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.authRepository.register(username, hashedPassword);
            const token = await this.getToken(user);
            return {
                success: true,
                message: 'Registration Successful!',
                user: {
                    id: user.id,
                    username: user.username,
                },
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

    // ** USING ANY, Ideally let's go back and refactor this later
    async checkPassword(user: any, password: String) { 
        return await bcrypt.compare(password, user.password);
    }

    // ** USING ANY, Ideally let's go back and refactor this later
    getToken(user: any) {
        return jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expireIn: '1h' }
        ); 
    }

    async login(username: String, password: String) {
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
                user: {
                    id: user.id,
                    username: user.username
                },
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