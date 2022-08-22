import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "remote-redux-devtools";
import { RootReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
