import MenuItem from "../models/MenuItem";

describe('MenuItem Model', () => {
    test.todo('should get all menu items'); //, async () => {
    
    //});

    test.todo('should get a menu item');//, async () => {
    
    //});

    it('should create a new menu item with valid data', async () => {
        const menuItem = await MenuItem.create({
            itemName: 'Pizza',
            price: 10.99,
            category: 'Main',
        });

        expect(menuItem.itemName).toBe('Pizza');
        expect(menuItem.price).toBe(10.99);
        expect(menuItem.category).toBe('Main');
    });

    it('should fail when creating menu item with missing required fields', async () => {
        try{
            await MenuItem.create({
                itemName: "", // Tried to have missing name
                price: 10.99,
                category: 'Main',
            });
        } catch (error: any) {
            expect(error).toBeDefined();
            expect(error.name).toBe('SequelizeValidationError');
        }
    });

    test.todo('should update a menu item');//, async () => {
    
    //});

    test.todo('should delete a menu item');//, async () => {
    
    //});
});