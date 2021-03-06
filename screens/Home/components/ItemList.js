import { ContainerItemList, TextStyles } from "../Home.styles";

export const ItemList = ({ onHandlerModal, data }) => {
  return (
    <ContainerItemList onPress={() => onHandlerModal()}>
      <TextStyles>{data.item.value}</TextStyles>
    </ContainerItemList>
  );
};
