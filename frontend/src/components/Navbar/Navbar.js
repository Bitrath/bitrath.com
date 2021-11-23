import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//MaterialUI
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <div className="navbar">
      <ul className="navbar__container">
        <li className="navbar__logo">
          <Link to="/">
            <span>bitrath.com</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/portfolio">
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/shop">
            <span>Shop</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog">
            <span>Blog</span>
          </Link>
        </li>
        <li className="navbar__cart">
          <Link to="/cart">
            <IconButton aria-label="Show Cart Items">
              <Badge badgeContent={getCartCount()}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
