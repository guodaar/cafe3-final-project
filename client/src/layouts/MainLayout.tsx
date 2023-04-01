import { PropsWithChildren } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { eggshell } from "../consts/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <TopBar></TopBar>
      <Content>
        <Left>
          <SideBar />
        </Left>
        <Right>{children}</Right>
      </Content>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${eggshell};
  height: 100vh;
`;

const Content = styled.div`
  padding: 54px 5vw;
  display: flex;
  justify-content: space-between;
  gap: 3vw;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 3;
`;
