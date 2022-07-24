import { Button, Text, View } from "react-native";
import { Screen } from "../../App.styles";

const Search = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text>Buscar</Text>
        <Button
          title="Regresar a propiedades"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </Screen>
  );
};

export default Search;
