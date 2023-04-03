import { ErrorMessage, Field } from "formik";
import { black, orange } from "../../consts/colors";
import { border, roundedBorder } from "../../consts/style";

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
      <Error name={name} component="div" />
    </div>
  );
};

export default FormikTextArea;

const StyledArea = styled.textarea`
  font-size: 16px;
  color: ${black};
  background-color: white;
  padding: 12px 24px;
  border: ${border};
  border-radius: ${roundedBorder};
  outline: none;
  width: 100%;
`;

const Error = styled(ErrorMessage)`
  font-size: 0.9rem;
  color: ${orange};
  margin: 8px 24px 0;
`;
