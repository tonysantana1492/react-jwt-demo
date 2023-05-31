import { createContext } from "react";

interface IContext {
    token: string | null;
    onSetToken: (newToken: string) => void;
}

export const AuthContext = createContext({} as IContext);