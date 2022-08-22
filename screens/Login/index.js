import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Screen } from "../../App.styles";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = { email: email, password: password };
    console.log(data);
    // dispatch();
    setEmail("");
    setPassword("");
  };
  return (
    <Screen>
      <Text>AlquilaYa</Text>
      <Text>Email:</Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text>Contraseña:</Text>
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button title="Ingresar" onPress={() => handleLogin()} />
      <TouchableOpacity onPress={() => navigation.navigate("Registrarse")}>
        <Text>No tengo cuenta</Text>
      </TouchableOpacity>
    </Screen>
  );
};
