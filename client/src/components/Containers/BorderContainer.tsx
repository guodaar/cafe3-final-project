import { border, boxShadow, roundedBorder } from "../../consts/style";

import Emoji from "../Emoji/Emoji";
import { PropsWithChildren } from "react";
import { lightGrey } from "../../consts/colors";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  title: string;
  symbol: string;
}

const BorderContainer = ({ title, symbol, children }: Props) => {
  return (
    <Container>
      <Title>
        {title}
        <Emoji symbol={symbol} />
      </Title>
      {children}
    </Container>
  );
};

export default BorderContainer;

const Container = styled.div`
  border: ${border};
  border-radius: ${roundedBorder};
  background-color: ${lightGrey};
  box-shadow: ${boxShadow};
  padding: 32px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Montserrat";
  font-size: 1.7rem;
  margin-bottom: 24px;
`;
