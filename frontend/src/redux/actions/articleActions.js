import * as actionTypes from '../constants/articleConstants';
import axios from 'axios';

//ACTION: Get Articles from API
export const getArticles = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_ARTICLES_REQUEST,
    });

    const { data } = await axios.get('/api/articles');

    dispatch({
      type: actionTypes.GET_ARTICLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Get an Article by its ID
export const getArticleDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_ARTICLE_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/articles/${id}`);
    dispatch({
      type: actionTypes.GET_ARTICLE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ARTICLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeArticleDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_ARTICLE_DETAILS_RESET });
};
