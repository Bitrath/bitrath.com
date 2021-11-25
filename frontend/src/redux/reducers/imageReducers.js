import * as actionTypes from '../constants/imageConstants';

//REDUCERS

//REDUCER: handles Get Images Action
export const getImagesReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGES_REQUEST:
      return {
        loading: true,
        images: [],
      };
    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        loading: false,
        images: action.payload,
      };
    case actionTypes.GET_IMAGES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//REDUCER: handles Get Image by ID Action
export const getImageDetailsReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGE_DETAILS_REQUEST:
      return {
        loading: true,
        payload: {},
      };
    case actionTypes.GET_IMAGE_DETAILS_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
      };
    case actionTypes.GET_IMAGE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
