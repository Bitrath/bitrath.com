import React from 'react';
import './ModalProduct.css';

//MaterialUI
import {
  Grid,
  Paper,
  Stack,
  IconButton,
  Divider,
  Card,
  CardMedia,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

//FramerMotion
import { motion } from 'framer-motion';

const ModalProduct = ({ selectedProduct, setSelectedProduct }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedProduct({});
    }
  };

  const imageOverride = () => {
    if (selectedProduct.image !== '') {
      return require(`../../images/${selectedProduct.image}`).default;
    }
  };

  return (
    <motion.div
      className="modal__backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <Paper className="modal__content" elevation={4}>
        <Grid container justify="center" spacing={4} className="modal__grid">
          <Grid item xs={6} sm={6} md={6} lg={6} className="modal__grid__item">
            <Card className="modal__grid__img">
              <CardMedia
                component="img"
                src={imageOverride()}
                title={selectedProduct.name}
              />
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Stack
              className="modal__stack"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <div className="modal__stack__item__1">
                {selectedProduct.name}
              </div>
              <div className="modal__stack__item__2">
                {selectedProduct.description}
              </div>
              <div className="modal__stack__item__3">
                <div>${selectedProduct.price}</div>
                <div>
                  <IconButton aria-label="Add To Cart">
                    <AddShoppingCart />
                  </IconButton>
                </div>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default ModalProduct;
