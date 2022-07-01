import { View, Button } from "react-native";
import { Form, Input, Screen } from "./App.styles";

export default function App() {
  return (
    <Screen>
      <Form>
        <Input placeholder="Ingrese aqui" />
        <Button title="Add" onPress={() => {}} />
      </Form>
      <View></View>
    </Screen>
  );
}
