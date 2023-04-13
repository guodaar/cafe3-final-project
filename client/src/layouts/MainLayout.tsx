import { eggshell, lavender } from "../consts/colors";

import { PropsWithChildren } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import { roundedBorder } from "../consts/style";
import { screenSize } from "../consts/mediaQueries";
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
  gap: 2vw;

  @media (max-width: ${screenSize.tablet}) {
    padding: 12px 2vw;
    flex-direction: column;
  }

  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    padding: 54px 3vw;
  }
`;

const Left = styled.div`
  flex: 1;

  @media (max-width: ${screenSize.laptop}) {
    flex: 1.3;
  }
`;

const Right = styled.div`
  flex: 3;
  background-color: ${lavender};
  border-radius: ${roundedBorder};
  padding: 32px 5vw 64px;
`;
