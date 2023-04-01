import { border, borderRadius, roundedBorder } from "../consts/style";

import React from "react";
import styled from "styled-components";
import { yellow } from "../consts/colors";

type Props = {};

const SideBar = (props: Props) => {
  return <Container>SideBar</Container>;
};

export default SideBar;

const Container = styled.div`
  background-color: ${yellow};
  border-radius: ${roundedBorder};
  height: 100vh;
`;
