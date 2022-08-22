import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Screen } from "../../App.styles";
import { registerUser } from "../../store/actions/register.actions";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();
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
    console.log(email);
    console.log(password);
    dispatch(registerUser(email, password));
  };

  return (
    <Screen>
      <Text>Registro</Text>
      <Text>Email:</Text>
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
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <Text>{errors.email?.message}</Text>
      <Text>Contraseña:</Text>
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
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Text>{errors.password?.message}</Text>

      <Button title="Registrarme" onPress={handleSubmit(onSubmit)} />

      <TouchableOpacity onPress={() => navigation.navigate("Ingresar")}>
        <Text>Ya tengo cuenta</Text>
      </TouchableOpacity>
    </Screen>
  );
};
