import { PropsWithChildren } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import { eggshell } from "../consts/colors";
import styled from "styled-components";

const MainLayout = ({ children }: PropsWithChildren) => {
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
  padding: 54px 7vw;
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
