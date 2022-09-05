import {
  LOADING_USER,
  LOGIN_ERROR_USER,
  LOGIN_SUCCESSFULL_USER,
  LOGOUT_USER,
} from "../types";

const initialState = {
  token: "",
  userId: "",
  error: "",
  loading: false,
  dataUser: "",
  userIsLogged: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULL_USER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: "",
        dataUser: action.dataUser,
        userIsLogged: true,
        loading: false,
      };
    case LOGIN_ERROR_USER:
      return {
        ...state,
        token: "",
        userId: "",
        error: action.error,
        dataUser: "",
        userIsLogged: false,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: "",
        userId: "",
        error: "",
        dataUser: "",
        userIsLogged: false,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default loginReducer;
