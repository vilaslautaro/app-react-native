import { TextInput } from "react-native";
import styled from "styled-components/native";

export const CustomInput = ({ register, name, ...rest }) => {
  return <InputStyles {...register(name)} {...rest} />;
};

const InputStyles = styled(TextInput)`
  border: 1px solid #fff;
  font-size: 15px;
  border-radius: 9px;
  width: 70%;
  background: #fff;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
`;
