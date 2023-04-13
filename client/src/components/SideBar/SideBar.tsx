import { HOME_PATH, USER_PATH } from "../../routes/consts";

import Button from "../Buttons/Button";
import { HiPencilAlt } from "react-icons/hi";
import StyledModal from "../StyledModal/StyledModal";
import SubmitQuestion from "../../pages/Question/SubmitQuestion";
import { screenSize } from "../../consts/mediaQueries";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const [questionFormOpen, setQuestionFormOpen] = useState(false);

  const toggleQuestionForm = () => {
    setQuestionFormOpen((prevOpen) => !prevOpen);
  };

  return (
    <Container>
      <Button onClick={toggleQuestionForm} fullWidth accent>
        Create a Spark <HiPencilAlt />
      </Button>
      <Button onClick={() => navigate(HOME_PATH)} fullWidth>
        Home
      </Button>
      <Button onClick={() => navigate(USER_PATH)} fullWidth>
        My questions
      </Button>
      <StyledModal
        modalSize="small"
        modalIsOpen={questionFormOpen}
        closeModal={toggleQuestionForm}
        title="Submit your question:"
      >
        <SubmitQuestion closeModal={toggleQuestionForm} />
      </StyledModal>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 18px;

  svg {
    font-size: 1.5rem;
    margin-bottom: -5px;
  }

  @media (max-width: ${screenSize.tablet}) {
    flex-direction: row;
    height: 50px;
    padding: 12px 8px;
  }
`;
