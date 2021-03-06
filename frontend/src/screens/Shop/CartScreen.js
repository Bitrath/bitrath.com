import React, { useState } from 'react';
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import CartItem from '../../components/Shop/CartItem';

//Redux Actions
import {
  subToCart,
  upToCart,
  emptyCart,
  removeFromCart,
  buyCart,
} from '../../redux/actions/cartActions';

//MaterialUI
import { Container, Button, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ModalCheckout from '../../components/Shop/ModalCheckout';

const CartScreen = () => {
  //Redux setup
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, products } = cart;

  //Client actions
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => item.product.price * item.qty + price,
      0
    );
  };

  const qtyAddChangeHandler = (id, qty) => {
    dispatch(upToCart(id, qty));
  };

  const qtySubChangeHandler = (id, qty) => {
    dispatch(subToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const emptyTheCart = () => {
    dispatch(emptyCart());
  };

  const checkoutTheCart = () => {
    dispatch(buyCart());
  };

  //Button MaterialUI Theme
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#000',
        contrastText: '#fff',
      },
    },
  });

  //Component Render UseState
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!loading);
  };

  //Modal Render Logic
  const isEmpty = () => {
    if (products) {
      if (products.length !== 0) {
        return false;
      } else {
        return true;
      }
    }
  };

  const status = isEmpty();

  const EmptyCart = () => (
    <div className="cartscreen__empty">
      <center>
        <h4>Empty</h4>
        <Link to="/shop">Go To Shop</Link>
      </center>
    </div>
  );

  const FilledCart = () => (
    <div className="cartscreen__filled">
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CartItem
              item={item}
              removeHandler={removeHandler}
              qtyAddChangeHandler={qtyAddChangeHandler}
              qtySubChangeHandler={qtySubChangeHandler}
            />
          </Grid>
        ))}
      </Grid>
      <div className="cartscreen__filled__cartdetails">
        <span>
          Subtotal of {getCartCount()} items: ${getCartSubTotal().toFixed(2)}
        </span>
        <div className="cartscreen__filled__buttons">
          <ThemeProvider theme={theme}>
            <Button
              className="cartscreen__filled__emptyButton"
              size="large"
              type="button"
              variant="outlined"
              color="neutral"
              sx={{ marginRight: '20px', marginBottom: '5px' }}
              onClick={() => emptyTheCart()}
            >
              Empty Cart
            </Button>
            <LoadingButton
              className="cartscreen__filled__checkoutButton"
              size="large"
              type="button"
              variant="outlined"
              color="neutral"
              sx={{ marginBottom: '5px' }}
              loading={loading}
              onClick={() => {
                handleClick();
                checkoutTheCart();
              }}
            >
              Checkout
            </LoadingButton>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );

  return (
    <Container className="cartscreen">
      <div className="cartscreen__toolbar">
        <span className="cartscreen__title">Shopping Cart</span>
        {cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}
        {status === false && (
          <ModalCheckout products={products} emptyTheCart={emptyTheCart} />
        )}
      </div>
    </Container>
  );
};

export default CartScreen;
