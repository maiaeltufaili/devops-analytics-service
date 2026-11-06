const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints & Metrics', () => {
  it('GET /health - should return status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  it('GET /metrics - should export Prometheus metrics', async () => {
    const res = await request(app).get('/metrics');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('http_requests_total');
  });
});
