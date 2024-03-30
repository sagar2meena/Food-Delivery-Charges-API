const express = require('express');
const { getPricing } = require('../controllers/pricingController');

const router = express.Router();

router.post('/pricing', getPricing);

module.exports = router;
