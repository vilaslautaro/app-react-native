import { LOGIN_USER } from "../types";

const URL_AUTH_API = process.env.FIREBASE_API_KEY_ID;

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_AUTH_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: LOGIN_USER,
        token: data.token,
        userId: data.localId,
        error: "",
        dataUser: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
