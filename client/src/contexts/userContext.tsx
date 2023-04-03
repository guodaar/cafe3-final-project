import { PropsWithChildren, createContext, useState } from "react";

import { useSessionStorage } from "../hooks/sessionStorage";

type CurrentUser = {
  token: string;
  username: string;
};

const UserContext = createContext<{
  user: CurrentUser | null;
  handleLogin: (newToken: any) => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
}>({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  isLoggedIn: false,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useSessionStorage("user", null);
  const isLoggedIn = !!user;

  const handleLogin = (newToken: any) => {
    setUser(newToken);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, user, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
