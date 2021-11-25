const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const imageModel = mongoose.model('image', imageSchema);

module.exports = imageModel;
