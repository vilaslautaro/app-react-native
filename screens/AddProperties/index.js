import { ScrollView } from "react-native";
import { FormNewProperties } from "./components/FormNewProperties";
import { TitleStyled } from "../../styles";

const AddProperties = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <TitleStyled>Publicar propiedad</TitleStyled>
      <FormNewProperties navigation={navigation} />
    </ScrollView>
  );
};

export default AddProperties;
