import { border, boxShadow, roundedBorder } from "../../consts/style";

import { PropsWithChildren } from "react";
import { lightGrey } from "../../consts/colors";
import styled from "styled-components";

const BorderContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default BorderContainer;

const Container = styled.div`
  border: ${border};
  border-radius: ${roundedBorder};
  background-color: ${lightGrey};
  box-shadow: ${boxShadow};
  padding: 32px;
`;
