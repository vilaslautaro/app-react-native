import {
  LOADING_USER,
  LOGIN_ERROR_USER,
  LOGIN_SUCCESSFULL_USER,
  LOGOUT_USER,
} from "../types";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../database/firebase";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_USER,
      });
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      if (response.user.uid) {
        return dispatch({
          type: LOGIN_SUCCESSFULL_USER,
          token: response.user?.accessToken,
          userId: response.user?.uid,
          dataUser: response.user,
        });
      } else {
        return dispatch({
          type: LOGIN_ERROR_USER,
          error: error,
        });
      }
    } catch (error) {
      console.log(error);
      return dispatch({
        type: LOGIN_ERROR_USER,
        error: error,
      });
    }
  };
};

export const signOutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({
        type: LOGOUT_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
