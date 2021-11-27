import React from 'react';
import './ArticlePreview.css';

//MaterialUI
import { Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const ArticlePreview = ({ preview }) => {
  return (
    <div className="articlepreview">
      <Link to={`/blog/${preview._id}`}>
        <Paper className="articlepreview__paper" sx={{ borderRadius: 5.5 }}>
          <div className="articlepreview__left">
            <h1>{preview.title}</h1>
            <span>{preview.date}</span>
          </div>
          <div className="articlepreview__right">
            <span>{preview.author}</span>
            <Avatar
              alt="Author"
              src={require('../../images/avatar_bitrath.jpg').default}
              sx={{ width: 40, height: 40 }}
            />
          </div>
        </Paper>
      </Link>
    </div>
  );
};

export default ArticlePreview;
