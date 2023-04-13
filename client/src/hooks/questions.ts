import { getQuestions } from "../api/questions";
import { useQuery } from "@tanstack/react-query";

const QUESTIONS = "QUESTIONS";

export const useQuestions = (
  token: string,
  sortBy?: string,
  sortOrder?: string
) => {
  return useQuery([QUESTIONS, sortBy, sortOrder], () =>
    getQuestions(token, sortOrder)
  );
};
