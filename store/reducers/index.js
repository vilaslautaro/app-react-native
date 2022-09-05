import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import newPropertyReducer from "./newProperty.reducer";
import placesReducer from "./places.reducer";

export const RootReducer = combineReducers({
  products: productsReducer,
  login: loginReducer,
  register: registerReducer,
  newProperty: newPropertyReducer,
  places: placesReducer,
});
