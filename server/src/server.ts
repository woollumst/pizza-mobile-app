import express from "express";

const app = express();
const port = 3000;
const host = 'localhost';

export const sum = (a: number, b: number): number => { // Test function to make sure Jest is working with TypeScript as intended
    return a + b;
}

app.get('/', (req, res) => { // Test endpoint to ensure server is live
    res.send('Server is running');
});

app.listen(port, () => { // Launch server
    console.log(`Server listening at http://${host}:${port}`);
});

export { app }; // exporting app for testing