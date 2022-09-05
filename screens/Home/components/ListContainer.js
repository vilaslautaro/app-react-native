import { FlatList } from "react-native";
import { ViewStyles } from "../Home.styles";
import { ItemList } from "./ItemList";

export const ListContainer = ({ itemList }) => {
  return (
    <ViewStyles>
      <FlatList
        data={itemList}
        renderItem={(data) => {
          return <ItemList data={data} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </ViewStyles>
  );
};
