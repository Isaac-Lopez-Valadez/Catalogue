const express = require('express');
const routers = express.Router();
const productController = require('./../controller/product');

routers.get('/products', productController.getProducts);

routers.post('/products', productController.postProducts);


module.exports = routers;