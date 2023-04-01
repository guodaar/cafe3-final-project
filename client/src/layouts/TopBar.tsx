import { black, lavender } from "../consts/colors";
import { border, transition } from "../consts/style";

import { BiArrowToRight } from "react-icons/bi";
import Emoji from "../components/Emoji/Emoji";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const TopBar = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Logo>
        Spark <Emoji symbol="✨" />
      </Logo>
      <Navigation>
        <Item>Contact us</Item>
        <Item>
          Sign out <BiArrowToRight />
        </Item>
      </Navigation>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5vw;
  border-bottom: ${border};
`;

const Logo = styled.h1`
  text-transform: uppercase;
  color: ${black};
  font-family: "Montserrat";
  font-size: 2.3rem;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.a`
  font-family: "Sora";
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  padding: 12px 0;
  display: flex;
  align-items: center;
  position: relative;
  transition: ${transition};

  svg {
    font-size: 1.2rem;
    margin-left: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 2px;
    bottom: 4px;
    left: 0;
    background-color: ${lavender};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: ${lavender};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
