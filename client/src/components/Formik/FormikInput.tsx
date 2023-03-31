import { ErrorMessage, Field } from "formik";

import Input from "../Input/Input";
import { InputProps } from "../../types/inputProps";

interface FormikInputProps extends InputProps {
  name: string;
}

const FormikInput = ({ name, ...restProps }: FormikInputProps) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
