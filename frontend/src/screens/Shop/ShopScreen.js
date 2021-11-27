import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ShopScreen.css';

//MaterialUI
import { Grid } from '@mui/material';

//Components
import Product from '../../components/Shop/Product';
import ModalProduct from '../../components/Shop/ModalProduct';

//Redux Actions
import { getProducts as listProducts } from '../../redux/actions/productActions';

const ShopScreen = ({ match, history }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  //try if the action works
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const isEmpty = (value) => {
    return (
      Boolean(value && typeof value === 'object') && !Object.keys(value).length
    );
  };

  const status = isEmpty(selectedProduct);

  return (
    <div className="shopscreen">
      <div className="shopscreen__header">
        <span>Shop</span>
      </div>
      <Grid container justify="center" spacing={4} className="shopscreen__grid">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product
                key={product._id}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            </Grid>
          ))
        )}
      </Grid>
      {status === false && (
        <ModalProduct
          key={selectedProduct._id}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default ShopScreen;
