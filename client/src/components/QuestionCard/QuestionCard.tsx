import {
  border,
  borderRadius,
  boxShadow,
  clickedBoxShadow,
  clickedTransform,
  transition,
} from "../../consts/style";
import { lavender, lightGrey, white, yellow } from "../../consts/colors";

import { IoSparkles } from "react-icons/io5";
import { Question } from "../../types/question";
import { date } from "yup";
import { formatDate } from "../../utils/formatDate";
import styled from "styled-components";

type Props = {
  question: Question;
};

const QuestionCard = ({ question }: Props) => {
  return (
    <Container>
      <Top>
        <Title>
          <div>
            <IoSparkles />
            {question.title}:
          </div>
          <div>
            <AnswerCount>{question.answer_count} Answers</AnswerCount>
          </div>
        </Title>
        <Text>{question.question}</Text>
      </Top>
      <Subtitle>
        <div>
          <span>{question.posted_by}</span> asked on:{" "}
          {formatDate(question.date_posted)}
        </div>
        {question.edited && <div>Edited</div>}
      </Subtitle>
    </Container>
  );
};

export default QuestionCard;

const Container = styled.div`
  cursor: pointer;
  background-color: ${white};
  box-shadow: ${boxShadow};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 18px;
  transition: ${transition};

  &:active {
    box-shadow: ${clickedBoxShadow};
    transform: ${clickedTransform};
  }

  &:hover {
    background-color: ${lightGrey};
  }
`;

const Top = styled.div`
  border-bottom: 1.5px solid ${lavender};
  padding-bottom: 12px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${yellow};
    font-size: 1.5rem;
    margin-bottom: -5px;
    margin-right: 5px;
  }
`;

const AnswerCount = styled.p`
  color: ${lavender};
  font-weight: 500;
  font-size: 1.1rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;

const Subtitle = styled.p`
  color: grey;
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 700;
  }
`;
