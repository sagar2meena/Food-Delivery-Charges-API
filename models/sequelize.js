const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? {
        require: true,
        rejectUnauthorized: false
      } : false
    },
  },
);

module.exports = sequelize;

