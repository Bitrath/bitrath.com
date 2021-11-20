//creates an array of products to save into the Cluster
const products = [
  {
    name: 'A glimpse at the present, a feeling of the past. #1',
    imagePath: 'sardegna2021_b_3.png',
    printSize: '10x15mm print',
    price: 20,
    availability: 100,
  },
  {
    name: 'A glimpse at the present, a feeling of the past. #2',
    imagePath: 'sardegna2021_b_10.png',
    printSize: '10x15mm print',
    price: 20,
    availability: 100,
  },
  {
    name: 'A glimpse at the present, a feeling of the past. #3',
    imagePath: 'sardegna2021_b_22.png',
    printSize: '10x15mm print',
    price: 20,
    availability: 100,
  },
  {
    name: 'Lerici behind a mirror. #1',
    imagePath: 'IMG_3195.JPG',
    printSize: '10x15mm print',
    price: 15,
    availability: 100,
  },
];

//Export the array as a module into Node. It'll also name the collection at MongoDB Atlas Cluster later on
module.exports = products;
