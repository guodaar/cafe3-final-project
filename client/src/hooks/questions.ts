import { getQuestions } from "../api/questions";
import { useQuery } from "@tanstack/react-query";

const QUESTIONS = "QUESTIONS";

export const useQuestions = (token: string) => {
  return useQuery([QUESTIONS], () => getQuestions(token));
};
