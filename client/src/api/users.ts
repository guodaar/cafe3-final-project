import { LoginUser, NewUser } from "../types/user";

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const REGISTER_URL = BASE_URL + "/user/register";

const LOGIN_URL = BASE_URL + "/user/login";

export const createUser = async (newUser: NewUser) => {
  const response = await axios.post(REGISTER_URL, newUser);
  return response.data.data;
};

export const loginUser = async (user: LoginUser) => {
  const response = await axios.post(LOGIN_URL, user);
  const { token, username } = response.data;
  return { token, username };
};
