import { black, white, yellow } from "../../consts/colors";
import { border, boxShadow, roundedBorder } from "../../consts/style";

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
  cursor: pointer;
  background-color: ${white};
  box-shadow: ${boxShadow};
  border: ${border};
  border-radius: ${roundedBorder};
  padding: 10px 15px;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: none;
  }

  &:active {
    background-color: ${yellow};
  }
`;
