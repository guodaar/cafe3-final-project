import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

import BorderContainer from "../../components/Containers/BorderContainer";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import { LOGIN_PATH } from "../../routes/consts";
import { NewUser } from "../../types/user";
import StyledForm from "../../components/Formik/StyledForm";
import { createUser } from "../../api/users";
import styled from "styled-components";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string()
    .required("Please retype your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: NewUser) => {
    const { repeatPassword, ...newUser } = values;
    createUser(newUser)
      .then((response) => {
        navigate(LOGIN_PATH);
        toast.success("Registration complete, you can now login");
      })
      .catch((error) => {
        toast.error("Registration failed");
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <BorderContainer title="Register" symbol="✨">
            <StyledForm>
              <FormikInput type="text" name="username" placeholder="Username" />
              <FormikInput type="email" name="email" placeholder="Email" />
              <FormikInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormikInput
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
              />
              <Button type="submit" disabled={isSubmitting}>
                Register
              </Button>
              <StyledLink to={LOGIN_PATH}>
                Already have an account? Sign in
              </StyledLink>
            </StyledForm>
          </BorderContainer>
        )}
      </Formik>
    </>
  );
};

export default Register;

const StyledLink = styled(Link)`
  text-align: center;
  color: black;
  margin-top: 12px;

  &:hover {
    text-decoration: none;
  }
`;
