import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

//MaterialUI
import { Stack, Divider } from '@mui/material';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="homescreen__header header1">
        <span>Home</span>
      </div>
      <Stack className="homescreen__stack" divider={<Divider flexItem />}>
        <div className="item1">
          <div className="homescreen__biography">
            <img
              src={require('../../images/self_01.jpg').default}
              className="homescreen__media"
              alt=""
            />
            <div className="homescreen__paper">
              <p>
                <h4>Hello, I'm Nicolò Zarulli, also known as Bitrath!</h4>
                <br /> My relationship with photography started during my
                teenage years and has never left ever since. I use Photography
                as a method to briefly escape from this world, triying to
                connect with the nature and the people that sorround me. <br />
                On this website, you’ll discover some of my most challenging and
                intimate shots I’ve taken to date. More to come!
              </p>
            </div>
          </div>
        </div>
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
