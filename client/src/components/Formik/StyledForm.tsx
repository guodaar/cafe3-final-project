import { Form } from "formik";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledForm = ({ children }: PropsWithChildren) => {
  return <FormContainer>{children}</FormContainer>;
};

export default StyledForm;

const FormContainer = styled(Form)`
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
`;
