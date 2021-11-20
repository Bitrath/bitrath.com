import React, { useState } from 'react';
import './ShopScreen.css';

//MaterialUI
import { Grid } from '@mui/material';

//Components
import Product from '../../components/Shop/Product';
import ModalProduct from '../../components/Shop/ModalProduct';

//Products STATIC
const products = [
  {
    id: 1,
    name: 'A glimpse at the present, a feeling of the past. #1',
    description: '10x15mm print',
    price: '20',
    image: 'sardegna2021_b_3.png',
  },
  {
    id: 2,
    name: 'A glimpse at the present, a feeling of the past. #2',
    description: '10x15mm print',
    price: '20',
    image: 'sardegna2021_b_10.png',
  },
  {
    id: 3,
    name: 'A glimpse at the present, a feeling of the past. #3',
    description: '10x15mm print',
    price: '5',
    image: 'sardegna2021_b_22.png',
  },
  {
    id: 4,
    name: 'Lerici behind a mirror',
    description: '10x15mm print',
    price: '5',
    image: 'IMG_3195.JPG',
  },
];

const ShopScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState({});

  const isEmpty = (value) => {
    return (
      Boolean(value && typeof value === 'object') && !Object.keys(value).length
    );
  };

  const status = isEmpty(selectedProduct);

  return (
    <div className="shopscreen">
      <div className="shopscreen__header">
        <span>Shop</span>
      </div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          </Grid>
        ))}
      </Grid>
      {status === false && (
        <ModalProduct
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default ShopScreen;
