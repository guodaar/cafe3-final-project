import { borderRadius, transition } from "../../consts/style";
import { lightGrey, mediumGrey } from "../../consts/colors";

import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  onClick: () => void;
}

const FlatButton = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default FlatButton;

const Button = styled.button`
  cursor: pointer;
  background-color: ${lightGrey};
  border: none;
  border-radius: ${borderRadius};
  padding: 8px 16px;
  transition: ${transition};

  svg {
    font-size: 1.3rem;
    margin: 0 0 -5px 5px;
  }

  &:hover {
    background-color: ${mediumGrey};
  }
`;
