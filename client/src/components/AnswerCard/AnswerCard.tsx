import { Answer, NewAnswer } from "../../types/answer";
import { IoColorWand, IoTrash } from "react-icons/io5";
import { black, lavender, orange, white } from "../../consts/colors";
import {
  border,
  borderRadius,
  boxShadow,
  transition,
} from "../../consts/style";
import { useContext, useState } from "react";

import Button from "../Buttons/Button";
import FlatButton from "../Buttons/FlatButton";
import Input from "../Input/Input";
import { UserContext } from "../../contexts/userContext";
import VoteButton from "../Buttons/VoteButton";
import { formatDate } from "../../utils/formatDate";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { updateAnswer } from "../../api/answers";

type Props = {
  // onVote: () => void;
  answer: Answer;
  handleDelete: () => void;
  userId: string;
};

const AnswerCard = ({
  // onVote,
  answer,
  handleDelete,
  userId,
}: Props) => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const [isEditing, setIsEditing] = useState(false);
  const [answerText, setAnswerText] = useState(answer.answer);

  const handleEdit = async (values: NewAnswer) => {
    try {
      const updated = await updateAnswer(token, values.answer, answer._id);
      setIsEditing(false);
      setAnswerText(updated);
      window.location.reload();
      toast.success("Question updated successfully!");
    } catch (error) {
      toast.error("Failed to update question");
    }
  };

  return (
    <Container>
      <Top>
        <Title>
          <div>
            @{answer.posted_by} <span>replied:</span>
          </div>
          <div>
            {/* <VoteButton
              onVote={onVote}
              answerId={answer._id}
              rating={answer.vote}
            /> */}
          </div>
        </Title>
        {isEditing ? (
          <div>
            <Input
              variant="textarea"
              type="text"
              value={answerText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnswerText(e.target.value)
              }
            />
            <ButtonsContainer>
              <Button onClick={() => setIsEditing(false)} fullWidth>
                Cancel
              </Button>
              <Button
                onClick={() => handleEdit({ answer: answerText })}
                accent
                fullWidth
              >
                Save
              </Button>
            </ButtonsContainer>
          </div>
        ) : (
          <Text>{answer.answer}</Text>
        )}
      </Top>
      <Subtitle>
        <span>{formatDate(answer.date_posted)} </span>
        {answer.edited && <i>(Edited)</i>}
      </Subtitle>
      <Bottom>
        <Actions>
          {userId === answer.user_id && (
            <>
              <FlatButton onClick={() => setIsEditing(true)}>
                Edit <IoColorWand />
              </FlatButton>
              <FlatButton onClick={handleDelete}>
                Delete <Trash />
              </FlatButton>
            </>
          )}
        </Actions>
      </Bottom>
    </Container>
  );
};

export default AnswerCard;

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

const Title = styled.div`
  color: ${lavender};
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  span {
    color: ${black};
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

const Subtitle = styled.p`
  color: grey;
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 8px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
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
