import { REGISTER_USER } from "../types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";

export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      dispatch({
        type: REGISTER_USER,
        token: "",
        userId: "",
        error: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
