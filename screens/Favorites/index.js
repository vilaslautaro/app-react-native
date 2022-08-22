import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Screen } from "../../App.styles";
import { getFavorites } from "../../store/actions/favorites.actions";
import Favorite from "./components/Favorite";

const Favorites = () => {
  const { dataFavorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <Screen>
      <View>
        <Text>Favoritos</Text>
        {dataFavorites.length > 0 ? (
          <FlatList
            data={dataFavorites}
            renderItem={(data) => {
              return <Favorite item={data.item} />;
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        ) : (
          "Cargando"
        )}
      </View>
    </Screen>
  );
};

export default Favorites;
