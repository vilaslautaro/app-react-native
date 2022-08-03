import { createStore } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { RootReducer } from "./reducers";

const store = createStore(RootReducer, composeWithDevTools())

export default store;
