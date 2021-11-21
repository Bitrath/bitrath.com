import React from 'react';
import './CartItem.css';

//MaterialUI
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

const CartItem = () => {
  return (
    <div className="cartitem">
      <Card>
        <CardMedia
          component="img"
          src={require('../../images/sardegna2021_b_3.png').default}
          alt="product name"
          className="cartitem__media"
        />
        <CardContent className="cartitem__content">
          <h4>Product Name</h4>
          <h5>$5</h5>
        </CardContent>
        <CardActions className="cartitem__cardactions">
          <ThemeProvider theme={theme}>
            <div className="cartitem__buttons">
              <Button size="small" type="button" color="neutral">
                -
              </Button>
              <span>10</span>
              <Button size="small" type="button" color="neutral">
                +
              </Button>
            </div>
            <Button variant="outlined" type="button" color="neutral">
              Remove
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
