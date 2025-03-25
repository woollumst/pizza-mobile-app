import request from 'supertest';
import { app } from '../server';

describe('Server', () => {
    it('Database Connected', async () => {
        const response = await request(app).get('/');
        expect(response.text).toMatch(/^Database Connected/);
    });
});