import request from 'supertest';
import { app } from '../server';

describe('GET /', () => {
    it('should return Server is running', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Server is running');
    });
});