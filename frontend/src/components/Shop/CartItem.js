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

const CartItem = ({
  item,
  removeHandler,
  qtyAddChangeHandler,
  qtySubChangeHandler,
}) => {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#000',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div className="cartitem">
      <Card className="cartitem__card">
        <CardMedia
          component="img"
          src={require(`../../images/${item.product.imagePath}`).default}
          alt={item.product.name}
          className="cartitem__media"
        />
        <CardContent className="cartitem__content">
          <h4>{item.product.name}</h4>
          <h5>${item.product.price}</h5>
        </CardContent>
        <CardActions className="cartitem__cardactions">
          <ThemeProvider theme={theme}>
            <div className="cartitem__buttons">
              <Button
                size="small"
                type="button"
                color="neutral"
                onClick={() => qtySubChangeHandler(item.product._id, item.qty)}
              >
                -
              </Button>
              <span>{item.qty}</span>
              <Button
                size="small"
                type="button"
                color="neutral"
                onClick={() => qtyAddChangeHandler(item.product._id, item.qty)}
              >
                +
              </Button>
            </div>
            <Button
              variant="outlined"
              type="button"
              color="neutral"
              onClick={() => removeHandler(item.product._id)}
            >
              Remove
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
