import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}
const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader.startsWith("Bearer ")) {
        console.log("No token or incorrect format");
        return res.status(401).json({ message: 'Forbidden: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    if(!token) {
        return res.status(4010).json({ message: 'Forbidden: token missing!' });
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET not defined in environment variables');
        }
        
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
}

export default authenticate;