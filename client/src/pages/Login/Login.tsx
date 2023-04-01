import * as Yup from "yup";

import { HOME_PATH, REGISTER_PATH } from "../../routes/consts";
import { Link, useNavigate } from "react-router-dom";

import BorderContainer from "../../components/Containers/BorderContainer";
import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import { Formik } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import { LoginUser } from "../../types/user";
import StyledForm from "../../components/Formik/StyledForm";
import { UserContext } from "../../contexts/userContext";
import { loginUser } from "../../api/users";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useContext } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (values: LoginUser) => {
    loginUser(values)
      .then((response) => {
        toast.success("You have successfully logged in!");
        setUser(response);
        navigate(HOME_PATH);
      })
      .catch((error) => {
        toast.error("Failed to login:");
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <BorderContainer title="Login" symbol="✨">
            <StyledForm>
              <FormikInput type="email" name="email" placeholder="Email" />
              <FormikInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <StyledLink to={REGISTER_PATH}>
                Don't have an account? Sign up
              </StyledLink>
            </StyledForm>
          </BorderContainer>
        )}
      </Formik>
    </>
  );
};

export default Login;

const StyledLink = styled(Link)`
  text-align: center;
  color: black;
  margin-top: 12px;

  &:hover {
    text-decoration: none;
  }
`;
