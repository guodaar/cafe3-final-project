import { lavender, white } from "../../consts/colors";

import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { roundedBorder } from "../../consts/style";
import styled from "styled-components";
import { useQuestions } from "../../hooks/questions";
import { useSessionStorage } from "../../hooks/sessionStorage";

type Props = {};

const Home = (props: Props) => {
  const [token] = useSessionStorage<string>("token", "");
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
  height: 100vh;
  padding: 32px 5vw;
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
