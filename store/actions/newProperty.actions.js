import {
  ADD_NEW_PROPERTY,
  ERROR_ADD_NEW_PROPERTY,
  LOADING_NEW_PROPERTY,
} from "../types";

export const addProperty = (property) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_NEW_PROPERTY });
      dispatch({ type: ADD_NEW_PROPERTY, payload: property });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_ADD_NEW_PROPERTY, error: error });
    }
  };
};
