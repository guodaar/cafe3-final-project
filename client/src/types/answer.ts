export type NewAnswer = {
  answer: string;
};

export interface Answer extends NewAnswer {
  _id: string;
  user_id: string;
  question_id: string;
  date_posted: string;
  posted_by: string;
  edited: boolean;
  vote: number;
}

export type VotedAnswer = {
  vote: number;
};
