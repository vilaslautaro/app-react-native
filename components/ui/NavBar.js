import { useForm } from "react-hook-form";
import { Button } from "react-native";
import { CustomInput } from "../CustomInput";
import {
  ButtonStyles,
  ContainerHeader,
  ContainerSubNavBar,
  TextButton,
  TextHeader,
} from "./NavBar.styles";

const NavBar = ({ title, addHouse, createHouse }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <ContainerHeader>
      <TextHeader>{title}</TextHeader>
      <ContainerSubNavBar>
        <CustomInput
          placeholder="Encontrá lo que buscas"
          register={register}
          name="searchValue"
          type="text"
        />
        <ButtonStyles onPress={handleSubmit(onSubmit)}>
          <TextButton>🔎</TextButton>
        </ButtonStyles>
      </ContainerSubNavBar>
      <Button
        title={createHouse ? "Volver al inicio" : "Añadir alquiler"}
        onPress={() => addHouse()}
      />
    </ContainerHeader>
  );
};

export default NavBar;
