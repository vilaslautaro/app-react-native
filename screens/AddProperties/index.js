import { ScrollView, View } from "react-native";
import { FormNewProperties } from "./components/FormNewProperties";
import { TitleStyled } from "../../styles";

const AddProperties = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TitleStyled>Publicar propiedad</TitleStyled>
        <FormNewProperties />
      </ScrollView>
    </View>
  );
};

export default AddProperties;
