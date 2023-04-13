import { ErrorMessage, Field } from "formik";

import Input from "../Input/Input";
import { InputHTMLAttributes } from "react";
import { orange } from "../../consts/colors";
import styled from "styled-components";

type Props = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  value?: string;
};

const FormikTextArea = ({ name, ...restProps }: Props) => {
  return (
    <div>
      <Field
        name={name}
        as={Input}
        variant="textarea"
        {...restProps}
        rows={6}
      />
      <Error name={name} component="div" />
    </div>
  );
};

export default FormikTextArea;

const Error = styled(ErrorMessage)`
  font-size: 0.9rem;
  color: ${orange};
  margin: 8px 24px 0;
`;
