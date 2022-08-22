import { ContainerItemList, TextStyles } from "../Home.styles";

export const ItemList = ({ addFavorite, data }) => {
  return (
    <ContainerItemList onPress={() => addFavorite()}>
      <TextStyles>{data.item.title}</TextStyles>
      <TextStyles>{data.item.id}</TextStyles>
      <TextStyles>{data.item.category}</TextStyles>
      <TextStyles>{data.item.data}</TextStyles>
    </ContainerItemList>
  );
};
