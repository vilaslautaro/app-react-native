import { arrayFavorites } from "../../data/favorites";
import { SELECTED_FAVORITE } from "../actions/favorites.actions";

const initialState = {
  dataFavorites: arrayFavorites,
  selected: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_FAVORITE:
      return {
        ...state,
        selected: state.dataFavorites.find(
          (favorite) => favorite.id === action.favoriteId
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
