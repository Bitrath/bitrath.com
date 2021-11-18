import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

//MaterialUI
import { Paper, Typography } from '@mui/material';
import { Home, Camera, Storefront, LibraryBooks } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Paper className="navbar" elevation={4}>
      <div className="navbar_logo">
        <Typography align="center">bitrath.com</Typography>
      </div>
      <div className="navbar_item">
        <Link to="/">
          <Home />
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/portfolio">
          <Typography align="center">portfolio</Typography>
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/shop">
          <Typography align="center">shop</Typography>
        </Link>
      </div>
      <div className="navbar_item">
        <Link to="/blog">
          <Typography align="center">blog</Typography>
        </Link>
      </div>
    </Paper>
  );
};

export default Navbar;
