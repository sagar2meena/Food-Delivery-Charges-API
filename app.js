
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const pricingRoutes = require('./routes/pricingRoutes');
require('./models/associations'); 

const app = express();

app.use(express.json());

//swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', pricingRoutes);

module.exports = app;