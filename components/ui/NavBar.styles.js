import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const ContainerHeader = styled(View)`
  width: 100%;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  flex-flow: column nowrap;
`;

export const ContainerSubNavBar = styled(View)`
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
  margin: 10px 0;
`;

export const TextHeader = styled(Text)`
  color: #fff;
  font-size: 22px;
`;

export const ButtonStyles = styled(TouchableOpacity)`
  width: 20%;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background: #0317AB;
  box-shadow: 1px 1px 3px #fff;
`;

export const TextButton = styled(Text)`
  font-size: 20px;
`;
