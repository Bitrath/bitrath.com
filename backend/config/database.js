//Get the API the access to the global sensible variables
require('dotenv').config();

//requires Mongoose from Node Modules
const mongoose = require('mongoose');

//Connection to a personal MongoDB Cluster via URI
const connectionToCluster = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Cluster connection SUCCESS");
  } catch (error) {
    console.log("MongoDB Cluster connection FAIL: " + error);
    process.exit(1);
  }
};

module.exports = connectionToCluster;
