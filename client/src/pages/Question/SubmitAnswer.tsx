import * as Yup from "yup";

import { generatePath, useNavigate } from "react-router-dom";

import { Formik } from "formik";
import FormikTextArea from "../../components/Formik/FormikTextarea";
import ModalButtons from "../../components/StyledModal/ModalButtons";
import { NewAnswer } from "../../types/answer";
import { QUESTION_PATH } from "../../routes/consts";
import StyledForm from "../../components/Formik/StyledForm";
import { UserContext } from "../../contexts/userContext";
import { createAnswer } from "../../api/answers";
import { toast } from "react-hot-toast";
import { useContext } from "react";

const initialValues: NewAnswer = {
  answer: "",
};

const validationSchema: Yup.ObjectSchema<NewAnswer> = Yup.object().shape({
  answer: Yup.string().required("Required"),
});

type Props = {
  questionId: string;
  closeModal: () => void;
};

const SubmitAnswer = ({ questionId, closeModal }: Props) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";

  const handleSubmit = async (values: NewAnswer) => {
    createAnswer(token, values, questionId)
      .then((response) => {
        toast.success("Thank you for your response!");
        closeModal();
        const path = generatePath(QUESTION_PATH, { questionId });
        navigate(path);
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
            <FormikTextArea
              type="text"
              name="answer"
              placeholder="Your response"
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

export default SubmitAnswer;
