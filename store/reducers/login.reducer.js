import { LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
  token: "",
  userId: "",
  error: "",
  dataUser: "",
  userIsLogged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: action.error,
        dataUser: action.dataUser,
        userIsLogged: action.userIsLogged,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: action.error,
        dataUser: action.dataUser,
        userIsLogged: action.userIsLogged,
      };

    default:
      return state;
  }
};

export default loginReducer;
