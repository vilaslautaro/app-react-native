import { Image } from "react-native";
import { ContainerItemList, TextStyles } from "../../Home/Home.styles";

export const ItemList = ({ data }) => {
  return (
    <ContainerItemList>
      <TextStyles>{data.item.title}</TextStyles>
      <Image
        source={{ uri: data.item.image }}
        style={{ width: "80%", height: "30%" }}
      />
      <TextStyles>{data.item.address}</TextStyles>
    </ContainerItemList>
  );
};
