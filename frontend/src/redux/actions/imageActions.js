import * as actionTypes from '../constants/imageConstants';
import axios from 'axios';

//ACTION: Get Images from API
export const getImages = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_IMAGES_REQUEST,
    });

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

//ACTION: Get Image by its ID from the API
export const getImageDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_IMAGE_DETAILS_REQUEST,
    });
    const { dataID } = await axios.get(`/api/images/${id}`);
    dispatch({
      type: actionTypes.GET_IMAGE_DETAILS_SUCCESS,
      payload: dataID,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_IMAGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
