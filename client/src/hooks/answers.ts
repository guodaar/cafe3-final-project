import { getAnswers } from "../api/answers";
import { useQuery } from "@tanstack/react-query";

const ANSWERS = "ANSWERS";

export const useAnswers = (token: string, questionId: any) => {
  return useQuery([ANSWERS], () => getAnswers(token, questionId));
};
