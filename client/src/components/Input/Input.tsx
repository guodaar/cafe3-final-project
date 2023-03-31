import { border, roundedBorder } from "../../consts/style";

import { InputProps } from "../../types/inputProps";
import { black } from "../../consts/colors";
import styled from "styled-components";

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  color: ${black};
  background-color: white;
  padding: 14px 24px;
  border: ${border};
  border-radius: ${roundedBorder};
  outline: none;
  width: 100%;
`;
