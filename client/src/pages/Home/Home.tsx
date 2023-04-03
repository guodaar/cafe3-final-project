import { lavender, white } from "../../consts/colors";

import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { UserContext } from "../../contexts/userContext";
import { roundedBorder } from "../../consts/style";
import styled from "styled-components";
import { useContext } from "react";
import { useQuestions } from "../../hooks/questions";

const Home = () => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const { data, isLoading } = useQuestions(token);
  const questions = data || [];
  console.log(questions);

  return (
    <>
      <Content>
        <Title>Conversations Sparked so far:</Title>
        <QuestionsContainer>
          {questions.map((question: Question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </QuestionsContainer>
      </Content>
    </>
  );
};

export default Home;

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
