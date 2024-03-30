const { Organization } = require('./Organization');
const { Item } = require('./Item');
const { Pricing } = require('./Pricing');

Organization.hasMany(Pricing, {
  foreignKey: 'organization_id',
});

Pricing.belongsTo(Organization, {
  foreignKey: 'organization_id',
});

Item.hasMany(Pricing, {
  foreignKey: 'item_id',
});

Pricing.belongsTo(Item, {
  foreignKey: 'item_id',
});

module.exports = { Organization, Item, Pricing };
