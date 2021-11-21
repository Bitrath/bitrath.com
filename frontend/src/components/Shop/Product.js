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

//FramerMotion
import { motion } from 'framer-motion';

const Product = ({ product, setSelectedProduct }) => {
  return (
    <div classname="product" onClick={() => setSelectedProduct(product)}>
      <Card className="product__card">
        <CardMedia
          component="img"
          className="product__media"
          src={require(`../../images/${product.image}`).default}
          title={product.name}
        />
        {/* src={require('../logo.png')} src={product.image}*/}
        <CardContent>
          <div className="product__content">
            <span>
              <b>{product.name}</b>
            </span>
            <span>${product.price}</span>
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
