import { FC } from "react";
import { TOKEN_NAME } from "../../constants";

export const Login: FC = () => {
  const onLogin = () => {
    localStorage.setItem(TOKEN_NAME, "adfghlepy5f4");
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
