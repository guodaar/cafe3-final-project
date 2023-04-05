import { NewQuestion } from "../types/question";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const QUESTIONS_URL = BASE_URL + "/questions";

export const getQuestions = (
  token: string,
  sortBy?: string,
  sortOrder?: string
) => {
  const params = {
    sortBy: sortBy,
    sortOrder: sortOrder,
  };

  return axios
    .get(QUESTIONS_URL, {
      params: params,
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response.data);
};

export const createQuestion = async (
  token: string,
  newQuestion: NewQuestion
) => {
  const response = await axios.post(QUESTIONS_URL, newQuestion, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data.data;
};

export const deleteQuestion = async (token: string, questionId: string) => {
  const response = await axios.delete(`${QUESTIONS_URL}/${questionId}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

export const updateQuestion = async (
  token: string,
  question: string,
  questionId: string
) => {
  const response = await axios.patch(
    `${QUESTIONS_URL}/${questionId}`,
    { question },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
};
