//Call Mongoose from NodeJS to create a New Schema
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  printSize: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
  },
});

//From the Schema create a Model
const productModel = mongoose.model('product', productSchema);

//Export the model as a Node Module. it'll be useful when our DB is going to be populated
module.exports = productModel;
