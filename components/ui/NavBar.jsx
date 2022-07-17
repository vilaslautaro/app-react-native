import React from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "../CustomInput";
import {
  ButtonStyles,
  ContainerHeader,
  ContainerSubNavBar,
  TextButton,
  TextHeader,
} from "./NavBar.styles";

const NavBar = ({ title }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <ContainerHeader>
      <TextHeader>{title}</TextHeader>
      <ContainerSubNavBar>
        <CustomInput register={register} name="searchValue" />
        <ButtonStyles onPress={handleSubmit(onSubmit)}>
          <TextButton>🔎</TextButton>
        </ButtonStyles>
      </ContainerSubNavBar>
    </ContainerHeader>
  );
};

export default NavBar;
