import User from "../models/User";

export class AuthRepository {
    // Register
    async register(username: string, hashedPassword: string) {
        try{
            const newUser = await User.create({
                userName: username, 
                hashedPassword: hashedPassword
            }); // Create new User obj with credentials
            return newUser; // = { id, userName, hashedPassword, ...timestamps }
        } catch (error) {
            console.error('Database error');
            throw new Error('Database query failed');
        }
    }

    // Get By Username
    async getByUsername(username: string) {
        try{
            const foundUser = await User.findOne({
                where: { userName: username }
            });
            return foundUser; // = { id, userName, hashedPassword, ...timestamps }
        } catch (error) {
            console.error('Database error');
            throw new Error('Database query failed');
        }
    }

    // Admin Commands?
    // ???
}