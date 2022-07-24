import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "./constants/colors";

const { primary } = colors();

export const Screen = styled(View)`
  flex: 1;
  background-color: ${primary};
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-family: "OSRegular";
`;

export const ContainerMain = styled(View)`
  flex: 3;
`;
