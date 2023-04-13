export type NewUser = {
  username: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

export type LoginUser = {
  email: string;
  password: string;
};
