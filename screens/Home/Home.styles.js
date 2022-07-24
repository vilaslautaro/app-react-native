import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ViewStyles = styled(View)`
  color: #000;
  font-size: 15px;
  margin: 5px 10px 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainerItemList = styled(TouchableOpacity)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: #000;
  margin: 10px 0;
  background: #c1c1c1;
  border-radius: 9px;
  padding: 5px 10px;
`;

export const Form = styled(View)`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const Input = styled(TextInput)`
  border-bottom-color: #000;
  border-bottom-width: 1px;
  width: 80%;
  padding-top: 5px;
  margin-right: 10px;
`;

export const TextStyles = styled(Text)`
  color: #000;
  font-size: 20px;
`;
