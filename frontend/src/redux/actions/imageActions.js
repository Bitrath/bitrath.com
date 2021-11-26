import * as actionTypes from '../constants/imageConstants';
import axios from 'axios';

//ACTION: Get Images from API
export const getImages = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/images');

    dispatch({
      type: actionTypes.GET_IMAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Get Images by Category from API
export const getImagesCategory = (category) => async (dispatch) => {
  if (category) {
    try {
      const { data } = await axios.get(`/api/images/category/${category}`);

      dispatch({
        type: actionTypes.GET_IMAGES_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_IMAGES_CATEGORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};
