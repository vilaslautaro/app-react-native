import { FlatList } from "react-native";
import { ViewStyles } from "../Home.styles";
import { ItemList } from "./ItemList";

export const ListContainer = ({ itemList, onHandlerModal }) => {
  return (
    <ViewStyles>
      <FlatList
        data={itemList}
        renderItem={(data) => {
          return (
            <ItemList
              data={data}
              onHandlerModal={() => onHandlerModal(data.item.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ViewStyles>
  );
};
