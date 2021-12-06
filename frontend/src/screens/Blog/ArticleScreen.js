import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ArticleScreen.css';

//Redux Actions
import { getArticleDetails } from '../../redux/actions/articleActions';

//Components
import Article from '../../components/Blog/Article';

const ArticleScreen = ({ match }) => {
  //Store access
  const dispatch = useDispatch();
  const articleID = useSelector((state) => state.articleID);
  const { loading, error, article } = articleID;

  useEffect(() => {
    dispatch(getArticleDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div className="articlescreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Article article={article} />
        </>
      )}
    </div>
  );
};

export default ArticleScreen;
