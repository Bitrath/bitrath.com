import React from 'react';
import './ModalProduct.css';

//MaterialUI
import { Paper } from '@mui/material';

//FramerMotion
import { motion } from 'framer-motion';

const ModalProduct = ({ selectedProduct, setSelectedProduct }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedProduct({});
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
        <center>ciao {selectedProduct.name}</center>
      </Paper>
    </motion.div>
  );
};

export default ModalProduct;
