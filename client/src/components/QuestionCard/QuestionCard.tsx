import {
  border,
  borderRadius,
  reverseBoxShadow,
  transition,
} from "../../consts/style";
import { lightGrey, yellow } from "../../consts/colors";

import styled from "styled-components";

type Question = {
  question: string;
};

type Props = {
  question: Question;
};

const QuestionCard = ({ question }: Props) => {
  return (
    <Container>
      <Text>{question.question}</Text>
    </Container>
  );
};

export default QuestionCard;

const Container = styled.div`
  cursor: pointer;
  background-color: ${lightGrey};
  box-shadow: ${reverseBoxShadow};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 18px;
  transition: ${transition};

  &:active {
    box-shadow: none;
  }

  &:hover {
    background-color: ${yellow};
  }
`;

const Text = styled.p``;
