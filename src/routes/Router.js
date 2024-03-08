import React from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/HomePage";

function Router() {
  const routes = useRoutes([
    {
      path: "/auth",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);

  return routes;
}

export default Router;
