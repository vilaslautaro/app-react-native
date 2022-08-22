import { Text } from "react-native";
import { Screen } from "../../App.styles";
import { ButtonSecondary, TitleStyled } from "../../styles";
import { FormLogin } from "./components/FormLogin.";

export const Login = ({ navigation }) => {
  return (
    <Screen>
      <TitleStyled>AlquilaYa</TitleStyled>
      <ButtonSecondary onPress={() => navigation.navigate("Registrarse")}>
        <Text>No tengo cuenta</Text>
      </ButtonSecondary>
    </Screen>
  );
};
