import { Controller, useForm } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { ImageSelector } from "../../../components/ImageSelector";
import {
  ButtonPrimary,
  InputAreaStyled,
  InputStyled,
  LabelStyled,
  TextBtnPrimary,
  TextError,
} from "../../../styles";
import { LocationSelector } from "../../../components/LocationSelector";

export const FormNewProperties = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <LabelStyled>Tipo</LabelStyled>
      <Controller
        control={control}
        rules={{
          required: "Campo requerido",
        }}
        render={({ field: { onChange, value } }) => (
          <Picker
            selectedValue={value}
            onValueChange={(type) => onChange(type)}
          >
            <Picker.Item label="Casa" value="3" />
            <Picker.Item label="Departamento" value="2" />
            <Picker.Item label="Duplex" value="1" />
          </Picker>
        )}
        name="typeProperty"
      />
      <TextError>{errors.typeProperty?.message}</TextError>
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
      <LabelStyled>Descripcion</LabelStyled>
      <Controller
        control={control}
        rules={{
          required: "Campo requerido",
          minLength: {
            value: 10,
            message: "Minimo 10 caracteres",
          },
          maxLength: {
            value: 200,
            message: "Numero de caracteres maximo alcanzado",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputAreaStyled
            multiline={true}
            numberOfLines={4}
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="descriptionProperty"
      />
      <TextError>{errors.descriptionProperty?.message}</TextError>
          
      <LabelStyled>Subir imagen</LabelStyled>
      <ImageSelector onImage={(image) => console.log(image)} />

      <LabelStyled>Ubicacion</LabelStyled>
      <LocationSelector onLocation={(location) => console.log(location)} />

      <ButtonPrimary onPress={handleSubmit(onSubmit)}>
        <TextBtnPrimary>Subir propiedad</TextBtnPrimary>
      </ButtonPrimary>
    </>
  );
};
