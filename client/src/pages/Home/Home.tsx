import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { lavender } from "../../consts/colors";
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
    <div>
      <Content>
        <QuestionsContainer>
          {questions.map((question: Question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </QuestionsContainer>
      </Content>
    </div>
  );
};

export default Home;

const Content = styled.div`
  background-color: ${lavender};
  border-radius: ${roundedBorder};
  height: 100vh;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 5vw;
`;
