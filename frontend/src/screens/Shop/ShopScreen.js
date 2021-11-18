import React from 'react';
import './ShopScreen.css';

//MaterialUI
import { Grid } from '@mui/material';

//Components
import Product from '../../components/Shop/Product';

//Products STATIC
const products = [
  { id: 1, name: 'MacBook', description: 'Apple MacBook', price: '$5' },
  { id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$5' },
  { id: 3, name: 'MacBook', description: 'Apple MacBook', price: '$5' },
  { id: 4, name: 'MacBook', description: 'Apple MacBook', price: '$5' },
];

const ShopScreen = () => {
  return (
    <div className="shopscreen">
      <div className="shopscreen__header">
        <span>Shop</span>
      </div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShopScreen;
