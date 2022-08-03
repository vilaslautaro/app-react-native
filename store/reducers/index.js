import { combineReducers } from "redux";
import favoritesReducer from "./favorites.reducer";

export const RootReducer = combineReducers({
    favorites: favoritesReducer,
  });
