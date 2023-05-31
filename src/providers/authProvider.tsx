import { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../contexts/authContext";
import { TOKEN_NAME } from "../constants";

type Itoken = string | null;
interface IProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<IProps> = ({ children }) => {
  const [token, setToken] = useState<Itoken>(localStorage.getItem(TOKEN_NAME));

  const onSetToken = useCallback(
    (newToken: string) => {
      setToken(token);
      localStorage.setItem(TOKEN_NAME, newToken);
    },
    [token]
  );

  const contextValue = { token, onSetToken };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem(TOKEN_NAME, token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem(TOKEN_NAME);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
