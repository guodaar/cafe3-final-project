import { IoColorWand, IoSend, IoTrash } from "react-icons/io5";
import { NewQuestion, Question } from "../../types/question";
import {
  border,
  borderRadius,
  boxShadow,
  transition,
} from "../../consts/style";
import { darkLavender, lavender, orange, white } from "../../consts/colors";
import { deleteQuestion, updateQuestion } from "../../api/questions";
import { generatePath, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Button from "../Buttons/Button";
import FlatButton from "../Buttons/FlatButton";
import Input from "../Input/Input";
import { QUESTION_PATH } from "../../routes/consts";
import StyledModal from "../StyledModal/StyledModal";
import SubmitAnswer from "../../pages/Question/SubmitAnswer";
import { UserContext } from "../../contexts/userContext";
import { formatDate } from "../../utils/formatDate";
import jwt_decode from "jwt-decode";
import styled from "styled-components";
import { toast } from "react-hot-toast";

type Props = {
  question: Question;
  onQuestionDeleted: () => void;
};

const QuestionCard = ({ question, onQuestionDeleted }: Props) => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const decodedToken: any = jwt_decode(token);
  const userId = decodedToken?._id;
  const navigate = useNavigate();
  const [answerFormOpen, setAnswerFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [questionText, setQuestionText] = useState(question.question);

  const goToAnswers = (questionId: string) => {
    const path = generatePath(QUESTION_PATH, { questionId });
    navigate(path);
  };

  const toggleAnswerForm = () => {
    setAnswerFormOpen((prevOpen) => !prevOpen);
  };

  const handleEdit = async (values: NewQuestion) => {
    try {
      const updated = await updateQuestion(
        token,
        values.question,
        question._id
      );
      setIsEditing(false);
      setQuestionText(updated);
      window.location.reload();
      toast.success("Question updated successfully!");
    } catch (error) {
      toast.error("Failed to update question");
    }
  };

  const handleDeleteQuestion = async (questionId: string) => {
    try {
      await deleteQuestion(token, questionId);
      toast.success("Question deleted!");
      onQuestionDeleted();
    } catch (error) {
      toast.error("Could not delete question");
    }
  };

  return (
    <Container>
      <Top>
        <Title>
          <span>@{question.posted_by} </span>
          asks:
        </Title>
        {isEditing ? (
          <div>
            <Input
              variant="textarea"
              type="text"
              value={questionText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuestionText(e.target.value)
              }
            />
            <ButtonsContainer>
              <Button onClick={() => setIsEditing(false)} fullWidth>
                Cancel
              </Button>
              <Button
                onClick={() => handleEdit({ question: questionText })}
                accent
                fullWidth
              >
                Save
              </Button>
            </ButtonsContainer>
          </div>
        ) : (
          <Text>{question.question}</Text>
        )}
      </Top>
      <Subtitle>
        {formatDate(question.date_posted)} {question.edited && <i>(Edited)</i>}
      </Subtitle>
      <Bottom>
        <AnswerCount onClick={() => goToAnswers(question._id)}>
          {question.answer_count.toString()} Answers
        </AnswerCount>
        <Actions>
          {userId === question.user_id && (
            <>
              <FlatButton onClick={() => setIsEditing(true)}>
                Edit <IoColorWand />
              </FlatButton>
              <FlatButton onClick={() => handleDeleteQuestion(question._id)}>
                Delete <Trash />
              </FlatButton>
            </>
          )}

          <FlatButton onClick={toggleAnswerForm}>
            Reply <Arrow />
          </FlatButton>
        </Actions>
      </Bottom>
      <StyledModal
        modalSize="small"
        modalIsOpen={answerFormOpen}
        closeModal={toggleAnswerForm}
        title="Submit your answer:"
      >
        <SubmitAnswer closeModal={toggleAnswerForm} questionId={question._id} />
      </StyledModal>
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

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 12px;

  span {
    color: ${orange};
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;

const Subtitle = styled.p`
  color: grey;
  font-weight: 400;
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
  margin-top: 8px;
  gap: 12px;
`;

const Arrow = styled(IoSend)`
  color: ${lavender};
`;

const Trash = styled(IoTrash)`
  color: ${orange};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px 0 8px;
  width: 80%;
`;
