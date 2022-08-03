import { Text, View } from "react-native";

const Favorite = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.data}</Text>
      <Text>{item.category}</Text>
      <Text>{item.date?.toString()}</Text>
    </View>
  );
};

export default Favorite;
