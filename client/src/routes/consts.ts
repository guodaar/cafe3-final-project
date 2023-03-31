import { AuthLayoutRoutes, MainLayoutRoutes } from "./routeTypes";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Question = lazy(() => import("../pages/Question/Question"));

export const LOGIN_PATH = "/";
export const HOME_PATH = "/";
export const REGISTER_PATH = "/register";
export const QUESTION_PATH = "/question";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: QUESTION_PATH, Component: Question },
  ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    { path: LOGIN_PATH, Component: Login },
    { path: REGISTER_PATH, Component: Register },
  ],
};
