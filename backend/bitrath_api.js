//Get the API the access to the global sensible variables
require('dotenv').config();

const express = require('express');
const connectionToCluster = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');

//SetUp a connection to the Cluster
connectionToCluster();

//SetUp a basic Express Server API
const bitrath_api = express();

//SetUp to use -Routes
bitrath_api.use(express.json());

//Import Routes
bitrath_api.use('/api/products', productRoutes);
bitrath_api.use('/api/images', imageRoutes);

//When a GET request is made to the Homepage -> "/" respond with 'Server is ready'
bitrath_api.get('/*', (req, res) => {
  res.send('<center>Server is ready</center>');
});

//SetUp a gate needed to serve at a certain SOCKET
const PORT = process.env.PORT || 5000;

//Now that the API is ready, listen for a CLIENT to make requests
bitrath_api.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
