import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS } from "../types";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await getDocs(collection(db, "products"));
      const products = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_PRODUCT, payload: product });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};
