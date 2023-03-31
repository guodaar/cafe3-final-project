import { ErrorMessage, Field } from "formik";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
};

const FormikTextArea = ({ name, ...restProps }: Props) => {
  return (
    <div>
      <Field name={name} as={StyledArea} {...restProps} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikTextArea;

const StyledArea = styled.textarea`
  font-size: 16px;
  color: black;
  background-color: white;
  padding: 14px 24px;
  border: 0;
  outline: none;
  width: 100%;
`;
