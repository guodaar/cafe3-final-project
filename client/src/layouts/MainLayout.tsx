import { PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: #f1efef;
  padding: 32px 15vw;
`;
