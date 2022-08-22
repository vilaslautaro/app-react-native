import { Text } from "react-native";
import { Screen } from "../../App.styles";
import { ButtonSecondary, TitleStyled } from "../../styles";
import { FormRegister } from "./components/FormRegister";

export const Register = ({ navigation }) => {
  return (
    <Screen>
      <TitleStyled>Registro</TitleStyled>
      <FormRegister />
      <ButtonSecondary onPress={() => navigation.navigate("Ingresar")}>
        <Text>Ya tengo cuenta</Text>
      </ButtonSecondary>
    </Screen>
  );
};
