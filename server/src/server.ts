import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', async (req, res) => { // Test endpoint to ensure server is live
    res.send('Hello World!');
    // try{ // old PG setup
    //     const result = await client.query("SELECT NOW()");
    //     res.send(`Database connected! Server time: ${result.rows[0].now}`);
    // } catch(error) {
    //     res.status(500).send('Database connection failed');
    // }
});

app.listen(port, () => { // Launch server
    console.log(`Server listening at http://${host}:${port}`);
});

export { app }; // exporting app for testing