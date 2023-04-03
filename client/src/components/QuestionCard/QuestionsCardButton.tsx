import { borderRadius, transition } from "../../consts/style";
import { lavender, lightGrey, mediumGrey } from "../../consts/colors";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const QuestionsCardButton = ({ children }: PropsWithChildren) => {
  return <Button>{children}</Button>;
};

export default QuestionsCardButton;

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
