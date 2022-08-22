import { Text } from "react-native";
import { Screen } from "../../App.styles";
import { ButtonSecondary, TitleStyled } from "../../styles/Components";
import { FormLogin } from "./components/FormLogin.";

export const Login = ({ navigation }) => {
  return (
    <Screen>
      <TitleStyled>AlquilaYa</TitleStyled>
      <FormLogin />
      <ButtonSecondary onPress={() => navigation.navigate("Registrarse")}>
        <Text>No tengo cuenta</Text>
      </ButtonSecondary>
    </Screen>
  );
};
