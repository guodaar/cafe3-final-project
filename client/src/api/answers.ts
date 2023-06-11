import { NewAnswer } from "../types/answer";
import axios from "axios";

const BASE_URL = "https://spark-app-sdsp.onrender.com";

const QUESTIONS_URL = BASE_URL + "/questions";
const ANSWER_URL = BASE_URL + "/answers";

export const getAnswers = (token: string, questionId: string) => {
  return axios
    .get(`${QUESTIONS_URL}/${questionId}/answers`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response.data);
};

export const createAnswer = async (
  token: string,
  newAnswer: NewAnswer,
  questionId: string
) => {
  const response = await axios.post(
    `${QUESTIONS_URL}/${questionId}/answers`,
    newAnswer,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data.data;
};

export const deleteAnswer = async (token: string, answerId: string) => {
  const response = await axios.delete(`${ANSWER_URL}/${answerId}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return response.data;
};

export const updateAnswerVote = async (
  token: string,
  answerId: string,
  vote: number
) => {
  const response = await axios.patch(
    `${ANSWER_URL}/${answerId}/vote`,
    { vote },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
};

export const updateAnswer = async (
  token: string,
  answer: string,
  answerId: string
) => {
  const response = await axios.patch(
    `${ANSWER_URL}/${answerId}`,
    { answer },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
};
