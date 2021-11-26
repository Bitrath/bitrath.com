import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Import Reducers
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducers/productReducers';
import { getImagesReducer } from './reducers/imageReducers';
import { cartReducer } from './reducers/cartReducers';

//Reducer Box setup
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  images: getImagesReducer,
  cart: cartReducer,
});

//Helps with async requests to API
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

//Saves my store state
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

//Redux Store Setup
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
