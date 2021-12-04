import React from 'react';
import './ModalCheckout.css';

//Framer-Motion
import { motion } from 'framer-motion';

//MaterialUI
import { Paper, Stack } from '@mui/material';

const ModalCheckout = ({ products, emptyTheCart }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      emptyTheCart();
    }
  };
  return (
    <motion.div
      className="modal__backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Paper elevation={3} className="modal__content">
        <Stack spacing={3} direction="column" className="modal__stack">
          <h3>Thank you for buying</h3>
          <ul>
            {products ? (
              products.map((item) => <li>{item.name}</li>)
            ) : (
              <span>No Products</span>
            )}
          </ul>
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default ModalCheckout;
