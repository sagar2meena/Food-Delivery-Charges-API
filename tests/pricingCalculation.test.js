const request = require('supertest');
const app = require('../app');

describe('/api/pricing calculation correctness', () => {
  test.each([
    { zone: "central", distance: 25, organization_id: "1", item_type: "perishable", expectedPrice: 40 },
    { zone: "central", distance: 30, organization_id: "2", item_type: "non-perishable", expectedPrice: 35 },
    { zone: "central", distance: 15, organization_id: "3", item_type: "perishable", expectedPrice: 25 },
    { zone: "central", distance: 10, organization_id: "4", item_type: "perishable", expectedPrice: 17.5 },
    { zone: "central", distance: 20, organization_id: "5", item_type: "non-perishable", expectedPrice: 25 },
  ])('calculates the correct price for $item_type items in $zone zone over $distance km', async ({ zone, distance, organization_id, item_type, expectedPrice }) => {
    const postData = { zone, organization_id, total_distance: distance, item_type };
    const response = await request(app).post('/api/pricing').send(postData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total_price: expectedPrice });
  });
});
