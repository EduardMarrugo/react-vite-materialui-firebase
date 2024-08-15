import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import LayoutRoot from "../layouts/LayoutRoot";
import Dashboard from "../pages/Dashboard";
import NotFound404 from "../pages/NotFound404";
import LayoutPrivate from "../layouts/LayoutPrivate";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
