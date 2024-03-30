const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  organizationId: {
    type: DataTypes.INTEGER,
    references: { model: 'organizations', key: 'id' },
    allowNull: false,
    field: 'organization_id', 
  },
  itemId: {
    type: DataTypes.INTEGER,
    references: { model: 'items', key: 'id' },
    allowNull: false,
    field: 'item_id', 
  },
  zone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  baseDistanceInKm: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'base_distance_in_km', 
  },
  kmPrice: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    field: 'km_price',
  },
  fixPrice: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    field: 'fix_price',
  },
}, {
  timestamps: false,
  tableName: 'pricing',
});

module.exports = {Pricing};
