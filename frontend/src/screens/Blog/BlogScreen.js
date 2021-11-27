import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BlogScreen.css';

//MaterialUI
import { Stack } from '@mui/material';
import ArticlePreview from '../../components/Blog/ArticlePreview';

//Redux Actions
import { getArticles as listArticles } from '../../redux/actions/articleActions';

const BlogScreen = () => {
  //Store Access
  const dispatch = useDispatch();
  const getArticles = useSelector((state) => state.articles);
  const { articles, loading, error } = getArticles;

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);
  return (
    <div className="blogscreen">
      <div className="blogscreen__header">
        <span>Blog</span>
      </div>
      <div className="blogscreen__content">
        <Stack spacing={3}>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            articles.map((x) => <ArticlePreview preview={x} />)
          )}
        </Stack>
      </div>
    </div>
  );
};

export default BlogScreen;
