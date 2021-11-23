import React from 'react';
import './Product.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Redux Actions
import { addToCart } from '../../redux/actions/cartActions';

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

const Product = ({ key, product, setSelectedProduct }) => {
  const qty = 1;
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  return (
    <div classname="product">
      <Card
        className="product__card"
        onClick={() => setSelectedProduct(product)}
      >
        <CardMedia
          component="img"
          className="product__media"
          src={require(`../../images/${product.imagePath}`).default}
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
          <span>{product.printSize}</span>
        </CardContent>
        <CardActions disableSpacing className="product__actions">
          <IconButton aria-label="Add To Cart" onClick={addToCartHandler}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
