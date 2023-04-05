import * as Yup from "yup";

import { Formik } from "formik";
import FormikTextArea from "../../components/Formik/FormikTextarea";
import { HOME_PATH } from "../../routes/consts";
import ModalButtons from "../../components/StyledModal/ModalButtons";
import { NewQuestion } from "../../types/question";
import StyledForm from "../../components/Formik/StyledForm";
import { UserContext } from "../../contexts/userContext";
import { createQuestion } from "../../api/questions";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const initialValues: NewQuestion = {
  question: "",
};

const validationSchema: Yup.ObjectSchema<NewQuestion> = Yup.object().shape({
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
        toast.success("Thank you for your spark!");
        navigate(HOME_PATH);
        closeModal();
        window.location.reload();
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
