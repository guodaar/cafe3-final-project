import { IoSend, IoSparkles } from "react-icons/io5";
import {
  border,
  borderRadius,
  boxShadow,
  transition,
} from "../../consts/style";
import {
  darkLavender,
  lavender,
  lightGrey,
  mediumGrey,
  white,
  yellow,
} from "../../consts/colors";

import { PropsWithChildren } from "react";
import { QUESTION_PATH } from "../../routes/consts";
import { Question } from "../../types/question";
import QuestionsCardButton from "./QuestionsCardButton";
import { formatDate } from "../../utils/formatDate";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props extends PropsWithChildren {
  question: Question;
}

const QuestionCard = ({ question, children }: Props) => {
  const navigate = useNavigate();

  const handleAnswersClick = () => {
    navigate(QUESTION_PATH);
  };

  return (
    <Container>
      <Top>
        <TitleWrapper>
          <div>
            <IoSparkles />
            {question.title}:
          </div>
          <div></div>
        </TitleWrapper>
        <Text>{question.question}</Text>
      </Top>
      <Subtitle>
        <span>{question.posted_by}</span> asked on:{" "}
        <span>{formatDate(question.date_posted)} </span>
        {question.edited && <i>(Edited)</i>}
      </Subtitle>
      <Bottom>
        <AnswerCount onClick={handleAnswersClick}>
          {question.answer_count.toString()} Answers
        </AnswerCount>
        <Actions>
          {children}
          <QuestionsCardButton>
            Reply <Arrow />
          </QuestionsCardButton>
        </Actions>
      </Bottom>
    </Container>
  );
};

export default QuestionCard;

const Container = styled.div`
  background-color: ${white};
  box-shadow: ${boxShadow};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 18px;
  transition: ${transition};
`;

const Top = styled.div`
  border-bottom: 1.5px solid ${lavender};
  padding-bottom: 12px;
`;

const TitleWrapper = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${yellow};
    font-size: 1.5rem;
    margin-bottom: -5px;
    margin-right: 5px;
  }
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

  span {
    font-weight: 700;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
`;

const AnswerCount = styled.p`
  cursor: pointer;
  color: ${lavender};
  font-weight: 600;
  font-size: 1.1rem;
  padding: 2px 0 2px 0;
  position: relative;
  transition: ${transition};

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 1px;
    border-width: 0 0 1.5px;
    border-style: solid;
  }

  &:hover::after {
    border-width: 0;
  }

  &:active {
    color: ${darkLavender};
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const Arrow = styled(IoSend)`
  color: ${lavender};
`;
