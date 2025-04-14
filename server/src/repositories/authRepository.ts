import User from "../models/User";

export class UserRepository {
    // Register
    async register(username: string, hashedPassword: string) {
        try{
            const newUser = await User.create({
                userName: username, 
                hashedPassword: hashedPassword
            }); // Create new User obj with credentials

            newUser.save(); // Persist to DB
            newUser.reload(); // Retreive User ID
            return newUser; // Return New User Object
        } catch (error) {
            console.error('Database error');
            throw new Error('Database query failed');
        }
    }

    // Get By Username
    async getByUsername(username: string) {
        
    }
    // Admin Commands?
    // ???
}