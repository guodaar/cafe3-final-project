import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

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
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: NewUser) => {
    const { ...newUser } = values;
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
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormikInput type="text" name="username" placeholder="Username" />
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
            <StyledLink to={LOGIN_PATH}>Sign in</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default Register;

const StyledLink = styled(Link)`
  text-align: center;
  color: black;

  &:hover {
    text-decoration: none;
  }
`;
