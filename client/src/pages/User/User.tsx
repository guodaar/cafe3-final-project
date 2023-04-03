import { IoColorWand, IoTrash } from "react-icons/io5";
import { black, lavender, orange, white, yellow } from "../../consts/colors";

import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import QuestionsCardButton from "../../components/QuestionCard/QuestionsCardButton";
import { UserContext } from "../../contexts/userContext";
import jwt_decode from "jwt-decode";
import { roundedBorder } from "../../consts/style";
import styled from "styled-components";
import { useContext } from "react";
import { useQuestions } from "../../hooks/questions";

const User = () => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const { data, isLoading } = useQuestions(token);
  const questions = data || [];

  const decodedToken: any = jwt_decode(token);
  const userId = decodedToken?._id;

  const filteredQuestions = questions.filter(
    (question: Question) => question.user_id === userId
  );

  return (
    <>
      <Content>
        <Title>My questions:</Title>
        <QuestionsContainer>
          {filteredQuestions.map((question: Question) => (
            <QuestionCard key={question._id} question={question}>
              <QuestionsCardButton>
                Edit <IoColorWand />
              </QuestionsCardButton>
              <QuestionsCardButton>
                Delete <Trash />
              </QuestionsCardButton>
            </QuestionCard>
          ))}
        </QuestionsContainer>
      </Content>
    </>
  );
};

export default User;

const Content = styled.div`
  background-color: ${lavender};
  border-radius: ${roundedBorder};
  padding: 32px 5vw 64px;
`;

const Title = styled.h2`
  font-family: "Montserrat";
  color: ${white};
  font-weight: 700;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

const Trash = styled(IoTrash)`
  color: ${orange};
`;
