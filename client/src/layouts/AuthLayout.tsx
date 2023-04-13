import { eggshell, lavender, white, yellow } from "../consts/colors";

import { IoSparkles } from "react-icons/io5";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroText>
          <IoSparkles />
          Igniting your curiosity with every <span>spark</span>
        </HeroText>
      </HeroContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};

export default AuthLayout;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 10vw;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${eggshell};
`;

const HeroContainer = styled.div`
  flex: 1.5;
`;

const HeroText = styled.h1`
  font-family: "Montserrat";
  font-size: 4rem;
  line-height: 1.2;

  span {
    background-color: ${lavender};
    color: ${white};
    padding: 0 18px 5px;
  }

  svg {
    color: ${yellow};
    font-size: 3rem;
  }
`;
