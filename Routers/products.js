const express = require('express');
const route = express.Router();
const advertisementController = require('../Controller/products');
route.get('/', advertisementController.getAllProducts);
route.post('/', advertisementController.addProduct);


module.exports = route;