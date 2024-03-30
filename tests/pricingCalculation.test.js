const request = require('supertest');
const app = require('../app');

describe('/api/pricing calculation correctness', () => {
  test.each([
    { zone: "centeral", distance: 25, organization_id: "1", item_type: "perishable", expectedPrice: 42.5 },
    { zone: "centeral", distance: 30.5, organization_id: "2", item_type: "non-perishable", expectedPrice: 40.5 },
    { zone: "centeral", distance: 15, organization_id: "3", item_type: "perishable", expectedPrice: 27.5 },
    { zone: "centeral", distance: 10, organization_id: "4", item_type: "perishable", expectedPrice: 20 },
    { zone: "centeral", distance: 20.1, organization_id: "5", item_type: "non-perishable", expectedPrice: 30.1 },
  ])('calculates the correct price for $item_type items in $zone zone over $distance km', async ({ zone, distance, organization_id, item_type, expectedPrice }) => {
    const postData = { zone, organization_id, total_distance: distance, item_type };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total_price: expectedPrice });
  });
});
