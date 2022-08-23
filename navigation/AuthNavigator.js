import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ title: "Ingresar" }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ title: "Registrarse" }}
        component={Register}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
