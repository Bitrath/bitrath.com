import React from 'react';
import './CartScreen.css';

//MaterialUI
import { Container, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Components
import CartItem from '../../components/Shop/CartItem';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

const CartScreen = () => {
  const isEmpty = false;

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
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CartItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CartItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <CartItem />
          </Grid>
        </Grid>
        <div className="cartscreen__filled__cartdetails">
          <span>Subtotal: $50</span>
          <div>
            <ThemeProvider theme={theme}>
              <Button
                className="cartscreen__filled__emptyButton"
                size="large"
                type="button"
                variant="outlined"
                color="neutral"
                sx={{ marginRight: '20px' }}
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
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default CartScreen;
