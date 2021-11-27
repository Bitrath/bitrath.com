import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PortfolioScreen.css';

//MaterialUI
import {
  Box,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

//Redux Actions
import {
  getImages as listImages,
  getImagesCategory,
} from '../../redux/actions/imageActions';

import ModalImage from '../../components/Portfolio/ModalImage';

const PortfolioScreen = () => {
  //States
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  //Store Access
  const dispatch = useDispatch();
  const getImages = useSelector((state) => state.images);
  const { images, loading, error } = getImages;
  //Portfolio Constants
  const categories = ['All', 'Sardegna', 'Lerici'];
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const laptop = useMediaQuery(theme.breakpoints.up('md'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));

  const isEmpty = (value) => {
    return (
      Boolean(value && typeof value === 'object') && !Object.keys(value).length
    );
  };

  var status = isEmpty(selectedImage);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const loadCategory = (cat) => {
    if (cat !== 'All') {
      dispatch(getImagesCategory(cat));
    } else {
      dispatch(listImages());
    }
  };

  const sizes = () => {
    if (desktop) return 4;
    if (laptop) return 3;
    if (tablet) return 2;
    if (mobile) return 2;
  };

  useEffect(() => {
    dispatch(listImages());
  }, [dispatch]);

  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <span>Portfolio</span>
      </div>
      <div className="portfolio__category">
        <Box sx={{ width: 120, zIndex: 0 }}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              value={selectedCategory}
              label="Categories"
              onChange={handleChange}
            >
              {categories.map((x) => (
                <MenuItem value={x} onClick={() => loadCategory(x)}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <Box>
        <ImageList
          variant="masonry"
          cols={sizes()}
          gap={25}
          sx={{ width: '100%' }}
          loading="lazy"
        >
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            images.map((item) => (
              <ImageListItem key={item.imagePath}>
                <img
                  src={
                    require(`../../images/${item.imagePath}?w=248&fit=crop&auto=format`)
                      .default
                  }
                  srcSet={
                    require(`../../images/${item.imagePath}?w=248&fit=crop&auto=format&dpr=2 2x`)
                      .default
                  }
                  alt={item.title}
                  loading="lazy"
                  className="portfolio__image"
                  onClick={() => setSelectedImage(item)}
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </Box>
      {status === false && (
        <ModalImage
          key={selectedImage._id}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default PortfolioScreen;
