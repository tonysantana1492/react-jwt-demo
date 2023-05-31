import { FC } from "react";
import { useRouteError } from "react-router-dom";

interface IError {
    statusText?: string;
    message?: string;
}

export const ErrorPage: FC = () => {

    const error = useRouteError() as IError;

    return (
        <div className="h-screen mx-auto flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-4xl">Opps!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="font-light">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}