require('dotenv').config();

//prendo i prodotti dalla cartella DATA
const productsData = require('./data/productsData');

//prendo e mi connetto al mio DB
const connectionToCluster = require('./config/database');

//prendo il Modello creato dallo Schema
const Product = require('./models/productModel');

connectionToCluster();

//delete everything in our db and insert new items
const importProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log('Data Import Success');
    process.exit();
  } catch (error) {
    console.error('Error with data import' + error);
    process.exit(1);
  }
};

importProducts();
