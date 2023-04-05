import { border, roundedBorder } from "../../consts/style";

import { black } from "../../consts/colors";
import styled from "styled-components";

type Props = {
  variant?: string;
} & Record<string, any>;

const Input = ({ variant, ...props }: Props) => {
  if (variant === "textarea") {
    return <StyledTextarea {...props} />;
  } else {
    return <StyledInput {...props} />;
  }
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  color: ${black};
  background-color: white;
  padding: 12px 24px;
  border: ${border};
  border-radius: ${roundedBorder};
  outline: none;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  font-size: 16px;
  color: ${black};
  background-color: white;
  padding: 12px 24px;
  border: ${border};
  border-radius: ${roundedBorder};
  outline: none;
  width: 100%;
  resize: vertical;
`;
