import { LOGIN_USER, LOGOUT_USER } from "../types";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../database/firebase";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      dispatch({
        type: LOGIN_USER,
        token: "",
        userId: "",
        userIsLogged: true,
        error: "",
        dataUser: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOutUser = () => {
  return async (dispatch) => {
    try {
      const response = await signOut(auth);
      console.log(response);
      dispatch({
        type: LOGOUT_USER,
        token: "",
        userId: "",
        userIsLogged: false,
        error: "",
        dataUser: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
