const sequelize = require('../models/sequelize'); // Ensure this path matches your project structure
const { faker } = require('@faker-js/faker');
const { Organization } = require('../models/Organization');
const { Item } = require('../models/Item');
const { Pricing } = require('../models/Pricing');

const generateOrganizations = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.company.name(),
  }));
};

const generateItems = (count) => {
  const types = ['perishable', 'non-perishable'];
  return Array.from({ length: count }, () => ({
    type: faker.helpers.arrayElement(types),
    description: faker.commerce.productName(),
  }));
};

const generatePricings = (organizationCount, itemCount, count) => {
  const zones = ['center'];

  return Array.from({ length: count }, () => ({
    organizationId: faker.number.int({ min: 1, max: organizationCount }),
    itemId: faker.number.int({ min: 1, max: itemCount }),
    zone: faker.helpers.arrayElement(zones),
    baseDistanceInKm: faker.number.int({ min: 5, max: 5 }),
    kmPrice: parseFloat(faker.commerce.price({min: 1, max: 1.5})),
    fixPrice: parseFloat(faker.commerce.price({min: 10,max: 10})),
  }));
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); 

  const organizations = generateOrganizations(10);
  await Organization.bulkCreate(organizations);

  const items = generateItems(20);
  await Item.bulkCreate(items);

  const pricings = generatePricings(organizations.length, items.length, 40);
  await Pricing.bulkCreate(pricings);

  console.log('Database seeded successfully.');
};

seedDatabase().catch(console.error);
