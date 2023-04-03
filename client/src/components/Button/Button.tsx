import {
  black,
  lavender,
  lightGrey,
  orange,
  white,
  yellow,
} from "../../consts/colors";
import {
  border,
  boxShadow,
  clickedBoxShadow,
  clickedTransform,
  roundedBorder,
  transition,
} from "../../consts/style";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  accent?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  onClick,
  children,
  type = "button",
  accent = false,
  fullWidth = false,
  disabled,
}: Props) => {
  return (
    <CustomButton
      onClick={onClick}
      type={type}
      accent={accent}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{ accent: boolean; fullWidth: boolean }>`
  font-family: "Sora";
  text-transform: capitalize;
  font-family: "Montserrat";
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${({ accent }) => (accent ? yellow : white)};
  box-shadow: ${boxShadow};
  border: ${border};
  border-radius: ${roundedBorder};
  padding: 12px 24px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  transition: ${transition};

  &:active {
    box-shadow: ${clickedBoxShadow};
    transform: ${clickedTransform};
  }

  &:hover {
    background-color: ${({ accent }) => (accent ? orange : lavender)};
  }
`;
