import { border, boxShadow, roundedBorder } from "../../consts/style";
import { lightGrey, yellow } from "../../consts/colors";

import { IoSparkles } from "react-icons/io5";
import { PropsWithChildren } from "react";
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
        <IoSparkles />
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

  svg {
    color: ${yellow};
    font-size: 1.7rem;
    margin-bottom: -5px;
    margin-left: 5px;
  }
`;
