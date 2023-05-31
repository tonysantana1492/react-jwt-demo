import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute: FC = () => {

    const { token } = useAuth();

    if(!token) {
       return <Navigate to='/login' />;
    }

    return (
        <div>
            <h1>Protected Router</h1>
            <Outlet />
        </div>
    );
}