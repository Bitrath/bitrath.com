import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

//MaterialUI
import { Avatar, Paper, Typography, Badge, IconButton } from '@mui/material';
import {
  Home,
  Camera,
  Storefront,
  LibraryBooks,
  ShoppingCart,
} from '@mui/icons-material';

const Navbar = () => {
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
          <Link to="/">
            <IconButton aria-label="Show Cart Items">
              <Badge badgeContent={2}>
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
