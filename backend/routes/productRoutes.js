const express = require('express');

//Routing Middleware
const router = express.Router();

//Import from the productController the actions, via HTTP, that will be routed from the Router Middleware
const {
  getAllProducts,
  getProductById,
} = require('../controller/productController');

//@desc GET all products from db
//@route GET /api/products
router.get('/', getAllProducts);

//@desc GET all products id from db
//@route GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;
