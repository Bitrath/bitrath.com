const express = require('express');

const router_images = express.Router();

const {
  getAllImages,
  getImageById,
  getImagesByCategory,
} = require('../controller/imageControllers');

//@desc GET all images from db
//@route GET /api/images
router_images.get('/', getAllImages);

//@desc GET an image by id from db
//@route GET /api/images/:id
router_images.get('/:id', getImageById);

//@desc GET an image by category from db
//@route GET /api/images/:category
router_images.get('/category/:category', getImagesByCategory);

module.exports = router_images;
