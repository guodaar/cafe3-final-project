import { PropsWithChildren, createContext, useState } from "react";

import { useSessionStorage } from "../hooks/sessionStorage";

const UserContext = createContext<{
  token: string | null;
  username: string | null;
  setUser: any;
  isLoggedIn: boolean;
}>({
  token: null,
  username: null,
  setUser: () => {},
  isLoggedIn: false,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useSessionStorage("token", null);
  const [username, setUsername] = useState<string | null>(null);
  const isLoggedIn = !!token;

  const setUser = (newToken: any) => {
    setToken(newToken.token);
    setUsername(newToken.username);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, token, username, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
