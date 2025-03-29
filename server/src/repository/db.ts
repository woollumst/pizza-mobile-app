import pkg from 'pg';
import dotenv from 'dotenv'; // TODO: refactor to sequelize

dotenv.config();

const { Client } = pkg;

const client = new Client({ // Creating database connection object 
    connectionString: process.env.DATABASE_URL, // use env variables to connect
});

// Attempt to connect to database
client.connect().then(() => console.log("Connected to Database!")).catch((err: Error) => console.error('Database connection error:', err.stack)).catch((err: unknown) => console.error('Unknown error occurred:', err));

async function initializeDB(){
    // Create tables if they don't exist 

    console.log("Attempting to make tables...");
    console.log("Database initialization not setup yet!");
}

export default client;