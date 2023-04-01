import { NewQuestion, Question } from "../types/question";

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const QUESTIONS_URL = BASE_URL + "/questions";

export const getQuestions = (token: string) => {
  return axios
    .get(QUESTIONS_URL, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response.data);
};