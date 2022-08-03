import { View, Text, TouchableOpacity } from "react-native";

export const CartItem = ({ item, onDelete }) => {
  return (
    <View>
      <View>
        <Text>{item.title}</Text>
      </View>
      <View>
        <Text>{item.data}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=> onDelete(item.id)}>
            Borrar
        </TouchableOpacity>
      </View>
    </View>
  );
};
