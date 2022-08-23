import { Screen } from "../../App.styles";
import { ButtonSecondary, TextBtnSecondary, TitleStyled } from "../../styles";
import { FormRegister } from "./components/FormRegister";

export const Register = ({ navigation }) => {
  return (
    <Screen>
      <TitleStyled>Registro</TitleStyled>
      <FormRegister />
      <ButtonSecondary onPress={() => navigation.navigate("Login")}>
        <TextBtnSecondary>Ya tengo cuenta</TextBtnSecondary>
      </ButtonSecondary>
    </Screen>
  );
};
