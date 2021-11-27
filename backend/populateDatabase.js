require('dotenv').config();

//Get all DATA to build into collections
const productsData = require('./data/productsData');
const imagesData = require('./data/imagesData');
const articlesData = require('./data/articlesData');

const connectionToCluster = require('./config/database');

//Get the Model required to handle DATA objects
const Product = require('./models/productModel');
const Image = require('./models/imageModel');
const Article = require('./models/articleModel');

connectionToCluster();

const importData = async () => {
  try {
    //Products import
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    //Images import
    await Image.deleteMany({});
    await Image.insertMany(imagesData);

    //Articles import
    await Article.deleteMany({});
    await Article.insertMany(articlesData);

    //Successful
    console.log('Data Import Success');
    process.exit(1);
  } catch (error) {
    console.error('Error with Data import' + error);
    process.exit(1);
  }
};

importData();
