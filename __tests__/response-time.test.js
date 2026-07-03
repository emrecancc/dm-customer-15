import request from 'supertest';
import app from '../src/app';

describe('API response time', () => {
  it('API responds within 600ms', async () => {
    const start = Date.now();
    await request(app).get('/api/endpoint');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(600);
  });
});