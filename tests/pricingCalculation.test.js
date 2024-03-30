const request = require('supertest');
const app = require('../app');

describe('/api/pricing calculation correctness', () => {
  test.each([
    { zone: "center", distance: 20.1, organization_id: "1", item_type: "perishable", expectedPrice: 32.65 },
    { zone: "center", distance: 30.5, organization_id: "2", item_type: "non-perishable", expectedPrice: 35.5 },
    { zone: "center", distance: 15, organization_id: "3", item_type: "perishable", expectedPrice: 25 },
    { zone: "center", distance: 10, organization_id: "4", item_type: "perishable", expectedPrice: 17.5 },
    { zone: "center", distance: 9, organization_id: "5", item_type: "non-perishable", expectedPrice: 14 },
  ])('calculates the correct price for $item_type items in $zone zone over $distance km', async ({ zone, distance, organization_id, item_type, expectedPrice }) => {
    const postData = { zone, organization_id, total_distance: distance, item_type };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total_price: expectedPrice });
  });
});
