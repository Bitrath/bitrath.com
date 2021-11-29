import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

//MaterialUI
import { Stack, Divider, Grid } from '@mui/material';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="homescreen__header header1">
        <span>Home</span>
      </div>
      <Stack className="homescreen__stack" divider={<Divider flexItem />}>
        <Grid container className="homescreen__grid">
          <Grid
            item
            className="homescreen__biography"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <img
              src={require('../../images/self_01.jpg').default}
              className="homescreen__media"
              alt=""
            />
          </Grid>
          <Grid
            item
            className="homescreen__paper"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <h4>Hello, I'm Nicolò Zarulli, also known as Bitrath!</h4>
            <p>
              <br /> My intimate bond with photography started during my teenage
              years and has never left ever since. Slowly but steady,
              Photography became likely an excuse to briefly escape from this
              world, tell stories about the people, the nature that sorrounds
              me. <br />
              On this website, you’ll discover some of my most challenging and
              intimate shots I’ve taken to date. More to come!
            </p>
          </Grid>
        </Grid>
        <div className="item2">
          <div className="homescreen__say">
            <span>Take a look at my work</span>
          </div>
          <Link to="/portfolio">
            <div className="homescreen__header header2">
              <span>Portfolio</span>
            </div>
          </Link>
        </div>
        <div className="item3">
          <div className="homescreen__say">
            <span>Consider supporting me</span>
          </div>
          <Link to="/shop">
            <div className="homescreen__header header3">
              <span>Shop</span>
            </div>
          </Link>
        </div>
        <div className="item4">
          <div className="homescreen__say">
            <span>Read through my latest thoughts</span>
          </div>
          <Link to="/blog">
            <div className="homescreen__header header4">
              <span>Blog</span>
            </div>
          </Link>
        </div>
      </Stack>
    </div>
  );
};

export default HomeScreen;
