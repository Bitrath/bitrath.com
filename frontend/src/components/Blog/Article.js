import React from 'react';
import parse from 'html-react-parser';
import './Article.css';

//MaterialUI
import { Paper, Avatar } from '@mui/material';

const Article = ({ article }) => {
  const htmlString = `${article.body}`;
  return (
    <div className="article">
      <Paper
        className="article__header"
        elevation={5}
        sx={{ borderRadius: 5.5 }}
      >
        <div className="article__header__left">
          <h1>{article.title}</h1>
          <span>Published on: {article.date}</span>
        </div>
        <div className="article__header__right">
          <span>{article.author}</span>
          <Avatar
            alt="Author"
            src={require('../../images/avatar_bitrath.jpg').default}
            sx={{ width: 40, height: 40 }}
          />
        </div>
      </Paper>
      <Paper className="article__body" elevation={5} sx={{ borderRadius: 5.5 }}>
        <div>{parse(htmlString)}</div>
        <div className="article__header__right">
          <span>Written by: {article.author}</span>
          <Avatar
            alt="Author"
            src={require('../../images/avatar_bitrath.jpg').default}
            sx={{ width: 40, height: 40 }}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Article;
