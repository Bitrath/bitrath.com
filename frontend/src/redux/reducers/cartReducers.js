import * as actionTypes from '../constants/cartConstants';

//CART REDUCER
export const cartReducer = (
  state = { cartItems: [], products: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) => x.product._id === item.product._id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product._id === existItem.product._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.SUB_QTY_CART:
      const subItem = state.cartItems.find(
        (x) => x.product._id === action.payload.product._id
      );
      subItem.qty -= 1;
      if (subItem.qty <= 0) {
        subItem.qty += 1;
      }
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product._id === subItem.product._id ? subItem : x
        ),
      };

    case actionTypes.UP_QTY_CART:
      const upItem = state.cartItems.find(
        (x) => x.product._id === action.payload.product._id
      );
      upItem.qty += 1;
      if (upItem.qty > upItem.availability) {
        upItem.qty -= 1;
      }
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product._id === upItem.product._id ? upItem : x
        ),
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.product._id !== action.payload
        ),
      };

    case actionTypes.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };

    case actionTypes.CART_CHECKOUT:
      const buying = action.payload.cartItems;
      const bought = [];

      if (buying.length !== 0) {
        buying.map((x) => {
          x.product.availability -= x.qty;
          return bought.push(x.product);
        });
      }
      return {
        ...state,
        cartItems: [],
        products: bought,
      };

    case actionTypes.CART_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
