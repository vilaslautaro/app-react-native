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
  width: 90%;
  margin: 0 10px;
`;

export const InputAreaStyled = styled(TextInput)`
  background-color: #c1c1c1;
  border-radius: 9px;
  color: #000;
  width: 90%;
  min-height: 100px;
  max-height: 150px;
  margin: 0 10px;
`;

export const LabelStyled = styled(Text)`
  font-size: 16px;
  margin: 0px;
  font-weight: 400;
  color: #0008;
`;

export const ButtonPrimary = styled(TouchableOpacity)`
  background-color: #000;
  color: #fff;
  margin: 5px 0;
  border-radius: 9px;
  padding: 7px 15px;
`;

export const TextBtnPrimary = styled(Text)`
  color: #fff;
`;

export const ButtonSecondary = styled(TouchableOpacity)`
  border-width: 1px;
  border-style: solid;
  border-color: #000;
  color: #fff;
  background: transparent;
  border-radius: 9px;
  padding: 7px 15px;
  margin: 5px 0;
`;

export const TextBtnSecondary = styled(Text)`
  color: #000;
`;

export const TextError = styled(Text)`
  font-size: 14px;
  margin: 0px;
  font-weight: 500;
  color: red;
`;
