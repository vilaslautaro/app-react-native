import * as FileSystem from "expo-file-system";
import {
  ADD_NEW_PLACES,
  ERROR_ADD_NEW_PLACES,
  LOADING_NEW_PLACES,
} from "../types";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_MAP_API_KEY}`
    );

    if (!response.ok) console.log("Error api Map");

    const data = await response.json();
    if (!data.results) console.log("coordenadas no encontradas");

    const address = data.results[0].formatted_address;
    console.log(address);

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    dispatch({ type: LOADING_NEW_PLACES });
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      dispatch({
        type: ADD_NEW_PLACES,
        payload: {
          title,
          image: Path,
          address,
          lat: location.lat,
          lng: location.lng,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_ADD_NEW_PLACES, error: error });
    }
  };
};
