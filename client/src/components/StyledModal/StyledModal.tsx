import { black, lightGrey, white } from "../../consts/colors";
import { border, roundedBorder } from "../../consts/style";

import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface StyledModalProps extends PropsWithChildren {
  modalSize: string;
  closeModal?: () => void;
  modalIsOpen: boolean;
  title?: string;
}

const StyledModal = ({
  modalIsOpen,
  modalSize,
  title,
  closeModal,
  children,
}: StyledModalProps) => {
  return (
    <Container
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      modalSize={modalSize}
    >
      <StyledCloseBtn onClick={closeModal} />
      {title ? <Title>{title}</Title> : null}
      {children}
    </Container>
  );
};

export default StyledModal;

const Container = styled(Modal)<{ modalSize: string }>`
  position: relative;
  min-height: 19rem;
  background-color: ${white};
  color: ${black};
  border-radius: ${roundedBorder};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: ${border};
  outline: none;
  padding: 32px 12vw;

  ${({ modalSize }) => {
    if (modalSize === "large") {
      return `
      margin: 6vh 12vw;
      padding: 32px 12vw;
      `;
    } else if (modalSize === "medium") {
      return `
      margin: 14vh 18vw;
      padding: 32px 12vw;
      `;
    } else if (modalSize === "small") {
      return `
      margin: 16vh 24vw;
      padding: 32px 8vw;
    `;
    }
  }}
`;

const StyledCloseBtn = styled(IoClose)`
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 1.6rem;
  cursor: pointer;
`;

const Title = styled.h3`
  font-family: "Montserrat";
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 24px;
  color: ${black};
`;
