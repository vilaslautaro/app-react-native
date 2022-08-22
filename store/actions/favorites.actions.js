import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES } from "../types";

const URL_API = process.env.FIREBASE_API_URL_DB;

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/favorites.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({ type: GET_FAVORITES, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFavorite = (favorite) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/favorites.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favorite: favorite,
        }),
      });
      const result = await response.json();
      console.log(result);
      dispatch({ type: ADD_FAVORITE, payload: favorite });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/favorites/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({ type: DELETE_FAVORITE, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};
