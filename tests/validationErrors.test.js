const request = require('supertest');
const app = require('../app');

describe('/api/pricing validation and error handling', () => {
  it('returns an error for missing fields', async () => {
    const postData = { organization_id: "1", total_distance: 10 };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Missing required fields" });
  });

  it('returns an error for unsupported item type', async () => {
    const postData = { zone: "central", organization_id: "1", total_distance: 10, item_type: "unknown" };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Unsupported item type" });
  });

  it('returns an error for unsupported item type', async () => {
    const postData = { zone: "central", organization_id: "1", total_distance: NaN, item_type: "perishable" };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Invalid total_distance value" });
  });

});
