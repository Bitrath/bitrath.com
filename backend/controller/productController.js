//Requires the productModel needed to load objects from the DB
const Product = require('../models/productModel');

//@desc GET all the Products, it'll show into the ShopPage
const getAllProducts = async (req, res) => {
  try {
    //Load Products from DB
    const products = await Product.find({});

    //Send them back to the client as a JSON file
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//@desc GET only one Product, matched by its :id parameter
const getProductById = async (req, res) => {
  try {
    //Loads from DB just the matching Product
    const product = await Product.findById(req.params.id);

    //Send it back to the client
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//@desc PUT new availability after checkout
const putNewAvailability = async (req, res) => {
  try {
    const bought = { availability: req.params.num };
    const prod = await Product.findOneAndUpdate(req.body._id, bought, {
      new: true,
    });
    res.json('updated succesfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//Routes will access to the controllers via this export to Node Modules
module.exports = {
  getAllProducts,
  getProductById,
  putNewAvailability,
};
