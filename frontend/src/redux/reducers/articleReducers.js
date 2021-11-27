import * as actionTypes from '../constants/articleConstants';

export const articlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_REQUEST:
      return {
        loading: true,
        articles: [],
      };
    case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
      };
    case actionTypes.GET_ARTICLES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const articleIDReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DETAILS_REQUEST:
      return {
        loading: true,
        article: {},
      };
    case actionTypes.GET_ARTICLE_DETAILS_SUCCESS:
      return {
        loading: false,
        article: action.payload,
      };
    case actionTypes.GET_ARTICLE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_ARTICLE_DETAILS_RESET:
      return {
        article: {},
      };
    default:
      return state;
  }
};
