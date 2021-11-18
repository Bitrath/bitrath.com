import React from 'react';
import './Product.css';

//MaterialUI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({ product }) => {
  return (
    <div classname="product">
      <Card className="product__card">
        <CardMedia className="product__media" src="" title={product.name} />
        <CardContent>
          <div className="product__content">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
          <span>{product.description}</span>
        </CardContent>
        <CardActions disableSpacing className="product__actions">
          <IconButton aria-label="Add To Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
