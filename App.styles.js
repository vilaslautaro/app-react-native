import { View, TextInput } from "react-native";
import styled from "styled-components/native";

export const Screen = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled(TextInput)`
  border-bottom-color: #000;
  border-bottom-width: 1px;
  width: 80%;
  padding-top: 5px;
  margin-right: 5px;
`;
