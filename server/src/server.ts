import express from "express";
import client from "./repository/db";

const app = express();
const port = process.env.PORT || 3000;
const host = 'localhost';

export const sum = (a: number, b: number): number => { // Test function to make sure Jest is working with TypeScript as intended
    return a + b;
}

app.get('/', async (req, res) => { // Test endpoint to ensure server is live
    try{
        const result = await client.query("SELECT NOW()");
        res.send(`Database connected! Server time: ${result.rows[0].now}`);
    } catch(error) {
        res.status(500).send('Database connection failed');
    }
});

app.listen(port, () => { // Launch server
    console.log(`Server listening at http://${host}:${port}`);
});

export { app }; // exporting app for testing