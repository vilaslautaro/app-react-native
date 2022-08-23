import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase";
import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES } from "../types";

const URL_API = process.env.FIREBASE_API_URL_DB;

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await getDocs(collection(db, "favorites"));
      const favorites = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: GET_FAVORITES, payload: favorites });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addFavorite = (favorite) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_FAVORITE, payload: favorite });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_FAVORITE, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};
