import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

//ACTION: Get Products from API
export const getProducts = () => async (dispatch) => {
  try {
    //if the store is dispatching this type of action
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });

    //the open a GET request to the server
    const { data } = await axios.get('/api/products');

    //if successful then pass the data retrieved as a Payload to the Reducer
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Get a Product by its ID from the API
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });
    const { dataID } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: dataID,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
