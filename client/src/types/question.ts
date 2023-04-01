export type NewQuestion = {
  question: string;
};

export interface Question extends NewQuestion {
  _id: string;
  user_id: string;
  posted_by: string;
  edited: boolean;
  date_posted: Date;
}
