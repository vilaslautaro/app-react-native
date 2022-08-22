import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresar" component={Login}></Stack.Screen>
      <Stack.Screen name="Registrarse" component={Register}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default AuthNavigator;
