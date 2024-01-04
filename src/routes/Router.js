import React from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

function Router() {
  const routes = useRoutes([
    {
      path: "/auth",
      element: <LoginPage />,
    },
  ]);

  return routes;
}

export default Router;
