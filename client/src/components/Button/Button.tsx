import { black, orange, white, yellow } from "../../consts/colors";
import {
  border,
  boxShadow,
  roundedBorder,
  transition,
} from "../../consts/style";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ onClick, children, type, disabled }: Props) => {
  return (
    <CustomButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  font-family: "Sora";
  text-transform: capitalize;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${yellow};
  box-shadow: ${boxShadow};
  border: ${border};
  border-radius: ${roundedBorder};
  padding: 10px 15px;
  margin-top: 12px;
  transition: ${transition};

  &:active {
    box-shadow: none;
  }

  &:hover {
    background-color: ${orange};
  }
`;
