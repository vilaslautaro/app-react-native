import { REGISTER_USER } from "../types";

const initialState = {
  token: "",
  userId: "",
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: action.error,
      };

    default:
      return state;
  }
};

export default registerReducer;
