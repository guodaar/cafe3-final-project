import { ComponentType, LazyExoticComponent, PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/home" | "/question";
  Component: LazyExoticComponent<ComponentType<any>>;
};

type AuthRoute = {
  path: "/" | "/register";
  Component: LazyExoticComponent<ComponentType<any>>;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};

export type AuthLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: AuthRoute[];
};
