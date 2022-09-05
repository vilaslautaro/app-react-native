import { ContainerItemList, TextStyles } from "../../Home/Home.styles";

export const ItemList = ({ data }) => {
  console.log(data)
  return (
    <ContainerItemList>
      <TextStyles>{data.item.title}</TextStyles>
      <TextStyles>{data.item.image}</TextStyles>
      <TextStyles>{data.item.address}</TextStyles>
    </ContainerItemList>
  );
};
