import sequelize from '../repositories/db';

beforeAll(async() => {
    await sequelize.sync({ force: true });
});

afterAll(async() => {
    await sequelize.close();
})

describe('Sequelize PSQL', () => {
    it('should have the Users table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('Users');
    });
    it('should have the MenuItems table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('MenuItems');
    });
    it('should have the Orders table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('Orders');
    });
    it('should have the Carts table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('Carts');
    });
    it('should have the OrderItems table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('OrderItems');
    });
    it('should have the Users table', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        expect(tables).toContain('Users');
    });
    it('should not have unexpected tables', async () => {
        const tables = await sequelize.getQueryInterface().showAllTables();
        const unexpectedTable = tables.find(table => !['MenuItems', 'Carts', 'Users', 'Orders', 'OrderItems'].includes(table));
        expect(unexpectedTable).toBeUndefined();
    });
});