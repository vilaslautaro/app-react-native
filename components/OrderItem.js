import { Text, TouchableOpacity, View } from "react-native";

export const OrderItem = ({ order, deleteOrder }) => {
  return (
    <View>
      <View>
        <Text>{order.name}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => deleteOrder(order.id)}
        >Borrar</TouchableOpacity>
      </View>
    </View>
  );
};
