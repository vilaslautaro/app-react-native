import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
  SELECTED_FAVORITE,
} from "../types";

const initialState = {
  dataFavorites: [],
  selected: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FAVORITE:
      return {
        ...state,
        selected: state.dataFavorites.find(
          (product) => product.id === action.payload
        ),
      };
    case GET_FAVORITES:
      return { ...state, dataFavorites: action.payload };
    case ADD_FAVORITE:
      return {
        ...state,
        dataFavorites: [...state.dataFavorites, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        dataFavorites: state.dataFavorites.filter(
          (f) => f.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
