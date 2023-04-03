import { getQuestions } from "../api/questions";
import { useQuery } from "@tanstack/react-query";

const QUESTIONS = "QUESTIONS";
const USER_QUESTIONS = "USER_QUESTIONS";

export const useQuestions = (token: string) => {
  return useQuery([QUESTIONS], () => getQuestions(token));
};
