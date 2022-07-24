import { Button, Text, View } from "react-native";
import { Screen } from "../../App.styles";

const AddProperties = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text>Publicar propiedad</Text>
        <Button
          title="Regresar a propiedades"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </Screen>
  );
};

export default AddProperties;
