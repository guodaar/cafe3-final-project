import { HOME_PATH, LOGIN_PATH } from "../../routes/consts";
import { PropsWithChildren, useContext } from "react";
import { black, lavender, white } from "../../consts/colors";
import { border, roundedBorder, transition } from "../../consts/style";

import Emoji from "../Emoji/Emoji";
import { IoArrowForwardOutline } from "react-icons/io5";
import { UserContext } from "../../contexts/userContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { handleLogout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    handleLogout();
    navigate(LOGIN_PATH);
  };

  return (
    <Container>
      <Logo onClick={() => navigate(HOME_PATH)}>
        Spark <Emoji symbol="✨" />
      </Logo>
      <Navigation>
        {user && (
          <p>
            Hi, <b>{user.username}</b>!
          </p>
        )}
        <Item onClick={logOut}>
          Sign out <IoArrowForwardOutline />
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
  padding: 8px 7vw;
  border-bottom: ${border};
`;

const Logo = styled.h1`
  cursor: pointer;
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
  padding: 6px 16px;
  display: flex;
  align-items: center;
  border: ${border};
  border-radius: ${roundedBorder};
  transition: ${transition};

  svg {
    font-size: 1.2rem;
    margin-left: 5px;
    margin-bottom: 2px;
  }

  &:hover {
    background-color: ${white};
  }

  &:active {
    color: ${lavender};
  }
`;
