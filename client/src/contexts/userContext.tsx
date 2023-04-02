import { PropsWithChildren, createContext, useState } from "react";

import { useSessionStorage } from "../hooks/sessionStorage";

const UserContext = createContext<{
  token: string | null;
  username: string | null;
  handleLogin: (newToken: any) => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
}>({
  token: null,
  username: null,
  handleLogin: () => {},
  handleLogout: () => {},
  isLoggedIn: false,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useSessionStorage("token", null);
  const [username, setUsername] = useState<string | null>(null);
  const isLoggedIn = !!token;

  const handleLogin = (newToken: any) => {
    setToken(newToken.token);
    setUsername(newToken.username);
  };

  const handleLogout = () => {
    setToken(null);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, token, username, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
