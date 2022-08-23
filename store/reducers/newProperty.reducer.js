import {
  ADD_NEW_PROPERTY,
  CLEAN_NEW_PROPERTY,
  ERROR_ADD_NEW_PROPERTY,
  LOADING_NEW_PROPERTY,
} from "../types";

const initialState = {
  dataImage: "",
  title: "",
  description: "",
  type: "",
  loading: false,
  error: false,
};

const newPropertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PROPERTY:
      const { dataImage, description, title, type } = action.payload;
      return {
        dataImage: dataImage,
        title: title,
        description: description,
        type: type,
        loading: false,
        error: false,
      };
    case ERROR_ADD_NEW_PROPERTY:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case LOADING_NEW_PROPERTY:
      return {
        ...state,
        loading: true,
      };
    case CLEAN_NEW_PROPERTY:
      return (state = initialState);

    default:
      return state;
  }
};

export default newPropertyReducer;
