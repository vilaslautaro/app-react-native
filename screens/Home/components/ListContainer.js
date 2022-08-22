import { FlatList } from "react-native";
import { ViewStyles } from "../Home.styles";
import { ItemList } from "./ItemList";

export const ListContainer = ({ itemList }) => {
  const addToFavorite = (id) => {
    console.log("agregado como favorito el producto " + id);
  };

  return (
    <ViewStyles>
      <FlatList
        data={itemList}
        renderItem={(data) => {
          return (
            <ItemList
              data={data}
              addFavorite={() => addToFavorite(data.item.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ViewStyles>
  );
};
