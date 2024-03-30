const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'organizations',
});

module.exports = {Organization};
