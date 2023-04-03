import * as Yup from "yup";

import Button from "../../components/Button/Button";
import { Formik } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import FormikTextArea from "../../components/Formik/FormikTextarea";
import { HOME_PATH } from "../../routes/consts";
import ModalButtons from "../../components/StyledModal/ModalButtons";
import { NewQuestion } from "../../types/question";
import StyledForm from "../../components/Formik/StyledForm";
import { UserContext } from "../../contexts/userContext";
import { createQuestion } from "../../api/questions";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../hooks/questions";

const initialValues: NewQuestion = {
  title: "",
  question: "",
};

const validationSchema: Yup.ObjectSchema<NewQuestion> = Yup.object().shape({
  title: Yup.string().required("Required"),
  question: Yup.string().required("Required"),
});

type Props = {
  closeModal: () => void;
};

const SubmitQuestion = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";

  const handleSubmit = async (values: NewQuestion) => {
    createQuestion(token, values)
      .then((response) => {
        toast.success("Thank you for your submission!");
        navigate(HOME_PATH);
        closeModal();
      })
      .catch((error) => {
        toast.error("Failed to submit");
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormikInput type="text" name="title" placeholder="Title" />
            <FormikTextArea
              type="text"
              name="question"
              placeholder="Your question"
            />
            <ModalButtons
              closeModal={closeModal}
              disabled={isSubmitting}
              submitTitle="Post"
            />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default SubmitQuestion;
