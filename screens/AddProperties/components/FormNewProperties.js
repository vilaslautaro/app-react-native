import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ImageSelector } from "../../../components/ImageSelector";
import { LocationSelector } from "../../../components/LocationSelector";
import { addPlace } from "../../../store/actions/places.actions";
import {
  ButtonPrimary,
  InputStyled,
  LabelStyled,
  TextBtnPrimary,
  TextError,
} from "../../../styles";

export const FormNewProperties = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    dispatch(addPlace(values.titleProperty, image, location));
    navigation.navigate("Propiedades");
  };

  return (
    <>
      <LabelStyled>Titulo</LabelStyled>
      <Controller
        control={control}
        rules={{
          required: "Campo requerido",
          minLength: {
            value: 8,
            message: "Minimo 4 caracteres",
          },
          maxLength: {
            value: 30,
            message: "Numero de caracteres maximo alcanzado",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputStyled
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="titleProperty"
      />
      <TextError>{errors.titleProperty?.message}</TextError>

      <LabelStyled>Subir imagen</LabelStyled>
      <ImageSelector onImage={(image) => setImage(image)} />

      <LabelStyled>Ubicacion</LabelStyled>
      <LocationSelector onLocation={(location) => setLocation(location)} />

      <ButtonPrimary onPress={handleSubmit(onSubmit)}>
        <TextBtnPrimary>Cargar nueva propiedad</TextBtnPrimary>
      </ButtonPrimary>
    </>
  );
};
