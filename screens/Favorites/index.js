import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Screen } from "../../App.styles";
import Favorite from "./components/Favorite";

const Favorites = () => {
  const { dataFavorites } = useSelector((state) => state.favorites);

  return (
    <Screen>
      <View>
        <Text>Favoritos</Text>
        <FlatList
          data={dataFavorites}
          renderItem={(data) => {
            return <Favorite item={data.item} />;
          }}
          keyExtractor={(item) => {
            console.log(item)
            return item.id}}
        />
      </View>
    </Screen>
  );
};

export default Favorites;
