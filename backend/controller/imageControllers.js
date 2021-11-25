const Image = require('../models/imageModel');

//@desc GET all the Images
const getAllImages = async (req, res) => {
  try {
    //Load Images from DB
    const images = await Image.find({});

    //Send them back to the client as a JSON file
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//@desc GET only one Image, matched by its :id parameter
const getImageById = async (req, res) => {
  try {
    //Loads from DB just the matching Image
    const image = await Image.findById(req.params.id);

    //Send it back to the client
    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//@desc GET Images, matched by its :category parameter
const getImagesByCategory = async (req, res) => {
  try {
    const cat = req.params.category;
    //Loads from DB just the matching Image
    const images = await Image.find({ category: `${cat}` });

    //Send it back to the client
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllImages,
  getImageById,
  getImagesByCategory,
};
