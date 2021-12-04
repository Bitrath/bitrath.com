import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

//ACTION: add Product to Cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        product: data,
        qty,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Subtracted from Button 1 qty from Item
export const subToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.SUB_QTY_CART,
      payload: {
        product: data,
        qty,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Added from button 1 qty of Item
export const upToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.UP_QTY_CART,
      payload: {
        product: data,
        qty,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Remove one Item by its ID from CART
export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Remove all the Items from CART
export const emptyCart = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CART_RESET,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//ACTION: Checkout the CART, updates availability onto Server
export const buyCart = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/`);

    dispatch({
      type: actionTypes.CART_CHECKOUT,
      payload: {
        cartItems: getState().cart.cartItems,
        products: data,
      },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));

    const update = getState().cart.products;
    if (update) {
      update.map(async (x) => {
        const body = x;
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        const res = await axios.put(`/api/products/update`, body, headers);
        console.log(res);
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
