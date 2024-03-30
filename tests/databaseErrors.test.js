const request = require('supertest');
const app = require('../app');

jest.mock('../services/pricingService', () => ({
    calculateDeliveryCost: jest.fn().mockRejectedValue(new Error('Database connection error')),
  }));
  
  describe('/api/pricing service errors', () => {
    it('handles database errors gracefully', async () => {
      const postData = { zone: "central", organization_id: "1", total_distance: 20, item_type: "perishable" };
      const response = await request(app).post('/api/pricing').send(postData);
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Internal server error. Please try again later." });
    });

  });
  