import * as actionTypes from '../constants/imageConstants';

//REDUCERS

//REDUCER: handles Get Images Action
export const getImagesReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case actionTypes.GET_IMAGES_FAIL:
      return {
        error: action.payload,
      };
    case actionTypes.GET_IMAGES_CATEGORY_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case actionTypes.GET_IMAGES_CATEGORY_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
