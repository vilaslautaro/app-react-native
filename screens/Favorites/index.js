import { Button, Text, View } from "react-native";
import { Screen } from "../../App.styles";

const Favorites = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text>Favoritos</Text>
        <Button
          title="Regresar a propiedades"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </Screen>
  );
};

export default Favorites;
