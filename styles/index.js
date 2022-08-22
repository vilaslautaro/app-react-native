import { Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const TitleStyled = styled(Text)`
  font-size: 25px;
  margin: 5px;
  font-weight: 600;
  color: #000;
`;

export const SubtitleStyled = styled(Text)`
  font-size: 20px;
  margin: 5px;
  font-weight: 500;
  color: #0008;
`;

export const InputStyled = styled(TextInput)`
  background-color: #c1c1c1;
  border-radius: 9px;
  color: #000;
  box-shadow: 0 0 9px #0008;
`;

export const LabelStyled = styled(Text)`
  font-size: 16px;
  margin: 0px;
  font-weight: 400;
  color: #0008;
`;

export const ButtonPrimary = styled(TouchableOpacity)`
  background-color: blue;
  color: #fff;
  margin: 5px 0;
  border-radius: 9px;
  padding: 7px 15px;
  width: fit-content;
  box-shadow: 0 0 9px #0008;
`;

export const ButtonSecondary = styled(TouchableOpacity)`
  border: 1px solid blue;
  background: transparent;
  border-radius: 9px;
  padding: 7px 15px;
  margin: 5px 0;
  width: fit-content;
  box-shadow: 0 0 9px #0008;
`;

export const TextError = styled(Text)`
  font-size: 14px;
  margin: 0px;
  font-weight: 500;
  color: red;
`;
