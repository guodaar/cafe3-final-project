import Button from "../Buttons/Button";
import styled from "styled-components";

type Props = {
  closeModal: () => void;
  submitTitle: string;
  disabled: boolean;
};

const ModalButtons = ({ closeModal, disabled, submitTitle }: Props) => {
  return (
    <ButtonsContainer>
      <Button onClick={closeModal} fullWidth>
        Close
      </Button>
      <Button type="submit" disabled={disabled} accent fullWidth>
        {submitTitle}
      </Button>
    </ButtonsContainer>
  );
};

export default ModalButtons;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
