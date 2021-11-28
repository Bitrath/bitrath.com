import React from 'react';
import './ModalImage.css';

import { motion } from 'framer-motion';

const ModalImage = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) {
      setSelectedImage({});
    }
  };
  const imageOverride = () => {
    if (selectedImage.imagePath !== '') {
      return require(`../../images/${selectedImage.imagePath}`).default;
    }
  };
  return (
    <motion.div
      className="modal__backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={imageOverride()}
        alt={selectedImage.name}
        className="modal__image"
      />
    </motion.div>
  );
};

export default ModalImage;
