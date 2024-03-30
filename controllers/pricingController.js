const { calculateDeliveryCost } = require('../services/pricingService');

const getPricing = async (req, res) => {
  try {
    const {
      zone,
      organization_id,
      total_distance,
      item_type,
    } = req.body;


    if (!zone || !organization_id || total_distance === undefined || !item_type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (isNaN(total_distance) || total_distance <= 0) {
      return res.status(400).json({ message: "Invalid total_distance value" });
    }

    if (!['perishable', 'non-perishable'].includes(item_type)) {
      return res.status(400).json({ message: "Unsupported item type" });
    }

    const result = await calculateDeliveryCost({
      zone,
      organization_id,
      total_distance,
      item_type,
    });

    if (!result) {
      return res.status(404).json({ message: "Pricing information not found for the provided parameters." });
    }

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};

module.exports = { getPricing };
