import { LOGIN_USER } from "../types";

const initialState = {
  token: "",
  userId: "",
  error: "",
  dataUser: "",
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
      };

    default:
      return state;
  }
};

export default loginReducer;
