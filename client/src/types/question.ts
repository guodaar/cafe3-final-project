export type NewQuestion = {
  title: string;
  question: string;
};

export interface Question extends NewQuestion {
  _id: string;
  user_id: string;
  posted_by: string;
  edited: boolean;
  date_posted: Date;
  answer_count: Number;
}
