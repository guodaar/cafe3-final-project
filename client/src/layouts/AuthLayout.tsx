import { PropsWithChildren } from "react";
import { eggshell } from "../consts/colors";
import styled from "styled-components";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      <Content>{children}</Content>
    </MainContainer>
  );
};

export default AuthLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${eggshell};
`;
