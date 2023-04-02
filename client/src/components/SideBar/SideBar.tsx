import Button from "../Button/Button";
import { HOME_PATH } from "../../routes/consts";
import { HiPencilAlt } from "react-icons/hi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button fullWidth accent>
        Create a Spark <HiPencilAlt />
      </Button>
      <Button onClick={() => navigate(HOME_PATH)} fullWidth>
        My questions
      </Button>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;

  svg {
    font-size: 1.5rem;
    margin-bottom: -5px;
  }
`;
