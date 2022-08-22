import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  SELECTED_PRODUCT,
} from "../types";

const initialState = {
  dataProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: state.dataProducts.find(
          (product) => product.id === action.payload
        ),
      };
    case GET_PRODUCTS:
      return { ...state, dataProducts: action.payload };
    case ADD_PRODUCT:
      return {
        ...state,
        dataProducts: [...state.dataProducts, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        dataProducts: state.dataProducts.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
