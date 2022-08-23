import { FormLogin } from "./components/FormLogin.";
import { Screen } from "../../App.styles";
import { ButtonSecondary, TextBtnSecondary, TitleStyled } from "../../styles";

export const Login = ({ navigation }) => {
  return (
    <Screen>
      <TitleStyled>AlquilaYa</TitleStyled>
      <FormLogin />
      <ButtonSecondary onPress={() => navigation.navigate("Register")}>
        <TextBtnSecondary>No tengo cuenta</TextBtnSecondary>
      </ButtonSecondary>
    </Screen>
  );
};
