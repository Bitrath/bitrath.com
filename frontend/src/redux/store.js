import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducer Box setup
const reducer = combineReducers({});

//Helps with async requests to API
const middleware = [thunk];

//Saves my store state
const INITIAL_STATE = {};

//Redux Store Setup
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
