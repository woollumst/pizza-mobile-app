const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

app.get('/', (req, res) => { // Test endpoint to ensure server is live
    res.send('Hello World!');
});

app.listen(port, () => { // Launch server
    console.log(`Server listening at http://${host}:${port}`);
});