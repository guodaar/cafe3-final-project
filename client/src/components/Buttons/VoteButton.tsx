import { MdThumbDown, MdThumbUp } from "react-icons/md";

import styled from "styled-components";
import { useState } from "react";

interface Props {
  onVote: (answerId: string, vote: number) => void;
  answerId: string;
  rating: number;
}

const VoteButton = ({ onVote, answerId, rating }: Props) => {
  const [voteValue, setVoteValue] = useState<number>(0);

  const handleVote = (value: number) => {
    setVoteValue(value);
    onVote(answerId, value);
    console.log(onVote(answerId, value));
  };

  return (
    <VoteButtonContainer>
      <VoteButtonIcon onClick={() => handleVote(1)}>
        <MdThumbUp color={voteValue === 1 ? "orange" : "black"} />
      </VoteButtonIcon>
      <div>{rating}</div>
      <VoteButtonIcon onClick={() => handleVote(-1)}>
        <MdThumbDown color={voteValue === -1 ? "orange" : "black"} />
      </VoteButtonIcon>
    </VoteButtonContainer>
  );
};

export default VoteButton;

const VoteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const VoteButtonIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
