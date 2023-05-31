import { AuthProvider } from "./providers/authProvider";
import { Routes } from "./routes/routes";

export const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}