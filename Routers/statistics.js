const express = require('express');
const route = express.Router();
const statisticsController = require('../Controller/statistics');
route.get('/', statisticsController.getAllProductsStatistics);
route.put('/', statisticsController.updateProductCounts);


module.exports = route;