import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PortfolioScreen.css';

//MaterialUI
import {
  Box,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

//Redux Actions
import { getImages as listImages } from '../../redux/actions/imageActions';

const PortfolioScreen = () => {
  const dispatch = useDispatch();
  const getImages = useSelector((state) => state.getImages);
  const { images, loading, error } = getImages;

  useEffect(() => {
    dispatch(listImages());
  }, [dispatch]);

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const laptop = useMediaQuery(theme.breakpoints.up('md'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));

  const sizes = () => {
    if (desktop) return 4;
    if (laptop) return 3;
    if (tablet) return 2;
    if (mobile) return 2;
  };

  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <span>Portfolio</span>
      </div>
      <Box>
        <ImageList
          variant="masonry"
          cols={sizes()}
          gap={10}
          sx={{ width: '100%' }}
          loading="lazy"
        >
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            images.map((item) => (
              <ImageListItem key={item.imagePath} rows={1}>
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
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </Box>
    </div>
  );
};

export default PortfolioScreen;
