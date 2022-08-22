import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS } from "../types";

const URL_API = process.env.FIREBASE_API_URL_DB;

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await getDocs(collection(db, "products"));
      console.log(response.docs);
      const products = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(products);
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/products.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: product,
        }),
      });
      const result = await response.json();
      console.log(result);
      dispatch({ type: ADD_PRODUCT, payload: product });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/products/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};
