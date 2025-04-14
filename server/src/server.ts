import express from "express";
import dotenv from "dotenv";
import sequelize from "./repositories/db";
/* import cartRoutes from './routes/cartRoutes';
app.use('/api', cartRoutes); */
// import authRoutes from "./controllers/authController.js"; //sample for importing routes (1/2)

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', async (req, res) => { // Test endpoint to ensure server is live
    res.send('Hello World!');
});

// app.use("/auth", authRoutes); // sample for importing routes (2/2)

const logCreatedTables = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to sequelize database!');

        const tables = await sequelize.getQueryInterface().showAllTables();
        console.log('Tables in the current database:');
        console.log(tables);
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
}

app.listen(port, () => { // Launch server
    console.log(`Server listening at http://${host}:${port}`);
    logCreatedTables();
});

export { app }; // exporting app for testing

/*
old server.js from taskmanagement app : 
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./repository/db.js";
import authRoutes from "./controllers/authController.js";
import taskRoutes from "./controllers/taskController.js";

dotenv.config();                            //env variables
const app = express();                      //load express
const PORT = process.env.PORT || 5000;      //grab port variable from env if available
app.use(express.json());                    // load json compatibility
app.use(cors());                            // load cors obj

app.use("/auth", authRoutes); // login, register routing and token dispersal handled in auth.js
app.use("/tasks", taskRoutes);

app.get('/', async (req, res) => { //home page
    try{ // test database connection?
        const result = await client.query('SELECT NOW()'); //test
        res.send(`Database connected! Server time: ${result.rows[0].now}`);
    } catch (error) {
        res.status(500).send('Database connection failed');
    }
});

// app.get('/api/protected', authenticate, (req, res) => { // Test endpoint to test JWT authentication
//     res.json({ message: ' you have access to this protected route', user: req.user });
// });

*/