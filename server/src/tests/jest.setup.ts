import sequelize from "../repositories/db";

// beforeAll(async () => { // Hard resets DB between each test run
//     await sequelize.sync({ force: true });
// });

beforeEach(async () => { // Flushes data between each test
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});