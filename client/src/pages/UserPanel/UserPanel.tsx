import { useContext, useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { UserContext } from "../../contexts/userContext";
import { filterByProperty } from "../../utils/filterByProperty";
import jwt_decode from "jwt-decode";
import styled from "styled-components";
import { useQuestions } from "../../hooks/questions";
import { white } from "../../consts/colors";

const UserPanel = () => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const { data, isLoading } = useQuestions(token);
  const allQuestions = data || [];
  const decodedToken: any = jwt_decode(token);
  const userId = decodedToken?._id;
  const userQuestions = filterByProperty(allQuestions, "user_id", userId);

  const [questions, setQuestions] = useState<Question[]>(userQuestions);

  const handleQuestionDeleted = (questionId: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question._id !== questionId)
    );
  };

  useEffect(() => {
    const updatedQuestions = filterByProperty(allQuestions, "user_id", userId);
    setQuestions(updatedQuestions);
  }, [data]);

  if (isLoading) {
    return (
      <>
        <Loader isLoading={true} />
      </>
    );
  }

  return (
    <>
      <Title>My questions:</Title>
      {questions.length > 0 ? (
        <QuestionsContainer>
          {questions.map((question: Question) => (
            <QuestionCard
              key={question._id}
              question={question}
              onQuestionDeleted={() => handleQuestionDeleted(question._id)}
            />
          ))}
        </QuestionsContainer>
      ) : (
        <ErrorMessage>You have not asked any questions yet</ErrorMessage>
      )}
    </>
  );
};

export default UserPanel;

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

const ErrorMessage = styled.p`
  font-family: "Sora";
  font-size: 0.9rem;
  margin-top: 32px;
  color: ${white};
`;
