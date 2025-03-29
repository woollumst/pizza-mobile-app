import request from 'supertest';
import { app } from '../server';

describe('Server', () => {
    test.todo('should connect to database');
    // it('Database Connected', async () => {
    //     const response = await request(app).get('/');
    //     expect(response.text).toMatch(/^Database/);
    // });

    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toMatch(/^Hello/);
    })
});