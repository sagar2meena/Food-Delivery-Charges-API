const { Pricing } = require('../models/Pricing');
const { Item } = require('../models/Item');
const sequelize = require('../models/sequelize')

class PricingNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PricingNotFoundError';
  }
}

const calculateDeliveryCost = async ({
  zone,
  organization_id,
  total_distance,
  item_type,
}) => {
  try {
    const pricingRules = await Pricing.findOne({
      where: { zone, organization_id: Number(organization_id) },
      include: [{ model: Item, where: { type: item_type }, required: true }],
    });

    if (!pricingRules) {
      throw new PricingNotFoundError('Pricing rules not found for the given parameters.');
    }

    const baseDistanceInKm = parseFloat(pricingRules.baseDistanceInKm);
    const kmPrice = parseFloat(pricingRules.kmPrice);
    const fixPrice = parseFloat(pricingRules.fixPrice);
    const distance = parseFloat(total_distance);

    const totalCost = fixPrice + Math.max(0, distance - baseDistanceInKm) * kmPrice;
    return { total_price: (Math.round(totalCost * 100) / 100) };
  } catch (error) {
    throw error;
  }
};

module.exports = { calculateDeliveryCost };
