import { Text, View } from "react-native";
import styled from "styled-components/native";

export const ContainerModal = styled(View)`
  margin: 0 30px;
  display: flex;
  position: absolute;
  bottom: 50px;
  justify-content: center;
  padding: 20px 25px;
  background: #c1c1c1;
  border-radius: 9px;
  z-index: 10;
`;

export const TextModal = styled(Text)`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ContainerButtons = styled(View)`
  margin: 5px 0;
`;
