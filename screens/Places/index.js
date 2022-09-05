import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as addressAction from "../../store/actions/places.actions";
import { ListContainer } from "./components/ListContainer";
import { Screen } from "../../App.styles";

const Places = () => {
  const { places } = useSelector((state) => state.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addressAction.getAddress());
  }, []);

  return (
    <Screen>
      {places.length > 0 ? (
        <ListContainer itemList={places} />
      ) : (
        <View>
          <Text>No se encontraron propiedades</Text>
        </View>
      )}
    </Screen>
  );
};

export default Places;
