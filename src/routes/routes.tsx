import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Login, Dashboard, ErrorPage, Root } from "../pages";
import { ProtectedRoute } from "./protectedRoute";

const commonRoutes = [
  {
    path: "",
    element: <h1>Landing Page</h1>,
  },
];

const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
];

const privateRoutes = [
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <h1>Not Found</h1> },
      ...privateRoutes,
      ...publicRoutes,
      ...commonRoutes,
    ],
  },
];

export const Routes = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
