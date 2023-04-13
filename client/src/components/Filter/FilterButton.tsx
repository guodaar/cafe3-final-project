import { black, lavender, lightGrey } from "../../consts/colors";
import {
  border,
  borderRadius,
  boxShadow,
  transition,
} from "../../consts/style";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  onClick: () => void;
  label: string;
}

const FilterButton = ({ onClick, children, label }: Props) => {
  return (
    <Button onClick={onClick}>
      <Label>{label}</Label>
      {children}
    </Button>
  );
};

export default FilterButton;

const Button = styled.button`
  cursor: pointer;
  background-color: ${lightGrey};
  border: ${border};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: 8px 16px;
  transition: ${transition};
  display: flex;
  align-items: center;

  svg {
    font-size: 1.3rem;
    margin: 0 4px;
  }

  &:hover {
    color: ${lavender};
  }
`;

const Label = styled.p`
  color: ${black};
  font-weight: 600;
  margin-right: 6px;
`;
