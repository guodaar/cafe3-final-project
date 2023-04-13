import {
  filterByProperty,
  filterOutByProperty,
} from "../../utils/filterByProperty";
import { orange, white, yellow } from "../../consts/colors";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Answer } from "../../types/answer";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import { HOME_PATH } from "../../routes/consts";
import { IoTrash } from "react-icons/io5";
import Loader from "../../components/Loader/Loader";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { UserContext } from "../../contexts/userContext";
import { deleteAnswer } from "../../api/answers";
import jwt_decode from "jwt-decode";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useAnswers } from "../../hooks/answers";
import { useQuestions } from "../../hooks/questions";

const Question = () => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const decodedToken: any = jwt_decode(token);
  const userId = decodedToken?._id;
  const { data: questionsData, isLoading: isQuestionsLoading } =
    useQuestions(token);
  const { data: answersData } = useAnswers(token, questionId);
  const questions = questionsData || [];
  const filteredQuestion = filterByProperty(questions, "_id", questionId);

  const [answers, setAnswers] = useState<Answer[]>(answersData || []);

  const handleEdit = () => {
    console.log("clicked");
  };

  const handleDelete = async (answerId: string) => {
    try {
      await deleteAnswer(token, answerId);
      const updatedAnswers = filterOutByProperty(answers, "_id", answerId);
      toast.success("Answer deleted!");
      setAnswers(updatedAnswers);
    } catch (error) {
      toast.error("Could not delete question");
    }
  };

  useEffect(() => {
    if (answersData) {
      setAnswers(answersData);
    }
  }, [answersData]);

  if (isQuestionsLoading) {
    return <Loader isLoading={true} />;
  }

  return (
    <>
      <Title>
        <span>@{filteredQuestion[0].posted_by}</span> sparked this conversation:
      </Title>
      <QuestionCard
        question={filteredQuestion[0]}
        onQuestionDeleted={() => navigate(HOME_PATH)}
      />
      <AnswersContainer>
        {answers.map((answer: Answer) => (
          <AnswerCard
            key={answer._id}
            answer={answer}
            handleDelete={() => handleDelete(answer._id)}
            userId={userId}
          />
        ))}
      </AnswersContainer>
    </>
  );
};

export default Question;

const Title = styled.h2`
  font-family: "Montserrat";
  color: ${white};
  font-weight: 700;
  margin-bottom: 32px;

  span {
    color: ${yellow};
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0 0 5vw;
`;

const Trash = styled(IoTrash)`
  color: ${orange};
`;
