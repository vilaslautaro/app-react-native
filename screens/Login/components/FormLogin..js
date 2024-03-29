import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import Spinner from "react-native-loading-spinner-overlay";
import { loginUser } from "../../../store/actions/login.actions";
import {
  ButtonPrimary,
  InputStyled,
  LabelStyled,
  TextBtnPrimary,
  TextError,
} from "../../../styles";

export const FormLogin = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    dispatch(loginUser(email, password));
  };

  return (
    <>
      <Spinner
        visible={loading}
        textContent={"Cargando..."}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0, 0, 0, 0.6)"
      />
      <LabelStyled>Email:</LabelStyled>
      <Controller
        control={control}
        rules={{
          required: "Campo requerido",
          pattern: {
            message: "Email invalido",
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputStyled
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <TextError>{errors.email?.message}</TextError>
      <LabelStyled>Contraseña:</LabelStyled>
      <Controller
        control={control}
        rules={{
          required: "Campo requerido",
          minLength: {
            value: 8,
            message: "Minimo 8 caracteres",
          },
          maxLength: {
            value: 30,
            message: "Numero de caracteres maximo alcanzado",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message:
              "La contraseña debe contener: Una letra mayúscula, una letra minúscula y un número.",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputStyled
            secureTextEntry
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <TextError>{errors.password?.message}</TextError>

      <ButtonPrimary onPress={handleSubmit(onSubmit)}>
        <TextBtnPrimary>Iniciar Sesion</TextBtnPrimary>
      </ButtonPrimary>
    </>
  );
};
