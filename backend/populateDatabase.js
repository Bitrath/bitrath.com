require('dotenv').config();

//Get all DATA to build into collections
const productsData = require('./data/productsData');
const imagesData = require('./data/imagesData');

const connectionToCluster = require('./config/database');

//Get the Model required to handle DATA objects
const Product = require('./models/productModel');
const Image = require('./models/imageModel');

connectionToCluster();

//delete everything in our Products collection and insert new items
const importProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log('Products Import Success');
  } catch (error) {
    console.error('Error with Products import' + error);
    process.exit(1);
  }
};
importProducts();

//import image data as a collection
const importImages = async () => {
  try {
    await Image.deleteMany({});
    await Image.insertMany(imagesData);
    console.log('Images Import Success');
  } catch (error) {
    console.error('Error with Images import' + error);
    process.exit(1);
  }
};
importImages();

//terminate the Population process
console.log('Data Import Success');
process.exit();
