import Place from "../../models/Place";
import {
  ADD_NEW_PLACES,
  CLEAN_NEW_PLACES,
  ERROR_ADD_NEW_PLACES,
  LOADING_NEW_PLACES,
} from "../types";

const initialState = {
  places: [],
  loading: false,
  error: false,
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PLACES:
      const { title, image, address, lat, lng } = action.payload;
      const newPlace = new Place(Date.now(), title, image, address, lat, lng);

      return {
        ...state,
        places: [...state.places, newPlace],
        loading: false,
        error: false,
      };
    case ERROR_ADD_NEW_PLACES:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case LOADING_NEW_PLACES:
      return {
        ...state,
        loading: true,
      };
    case CLEAN_NEW_PLACES:
      return (state = initialState);

    default:
      return state;
  }
};

export default placesReducer;
