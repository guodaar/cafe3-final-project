import { ErrorMessage, Field } from "formik";

import Input from "../Input/Input";
import { InputProps } from "../../types/inputProps";
import { orange } from "../../consts/colors";
import styled from "styled-components";

interface FormikInputProps extends InputProps {
  name: string;
}

const FormikInput = ({ name, ...restProps }: FormikInputProps) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <Error name={name} component="div" />
    </div>
  );
};

export default FormikInput;

const Error = styled(ErrorMessage)`
  font-size: 0.9rem;
  color: ${orange};
  margin: 8px 24px 0;
`;
