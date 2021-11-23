import React from 'react';
import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import CartItem from '../../components/Shop/CartItem';

//Redux Actions
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from '../../redux/actions/cartActions';

//MaterialUI
import { Container, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => item.product.price * item.qty + price,
      0
    );
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const emptyTheCart = () => {
    dispatch(emptyCart());
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#000',
        contrastText: '#fff',
      },
    },
  });

  const EmptyCart = () => (
    <div className="cartscreen__empty">
      <h4>You have no items in your shopping cart, start adding some!</h4>
      <Link to="/shop">Go To Shop</Link>
    </div>
  );

  const FilledCart = () => (
    <div className="cartscreen__filled">
      <>
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CartItem item={item} removeHandler={removeHandler} />
            </Grid>
          ))}
        </Grid>
        <div className="cartscreen__filled__cartdetails">
          <span>
            Subtotal of {getCartCount()} items: ${getCartSubTotal().toFixed(2)}
          </span>
          <div>
            <ThemeProvider theme={theme}>
              <Button
                className="cartscreen__filled__emptyButton"
                size="large"
                type="button"
                variant="outlined"
                color="neutral"
                sx={{ marginRight: '20px' }}
                onClick={() => emptyTheCart()}
              >
                Empty Cart
              </Button>
              <Button
                className="cartscreen__filled__checkoutButton"
                size="large"
                type="button"
                variant="outlined"
                color="neutral"
              >
                Checkout
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </>
    </div>
  );

  return (
    <Container className="cartscreen">
      <div className="cartscreen__toolbar">
        <span className="cartscreen__title">Your Shopping Cart</span>
        {cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default CartScreen;
