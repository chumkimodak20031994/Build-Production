import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Children } from "react";
import Home from "../pages/Home";
import AllApps from "../pages/apps/AllApps";
import AppDetails from "../pages/apps/AppDetails";
import appsData from "../../../public/apps.json";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps apps={appsData} />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails apps={appsData} />,
      },
    ],
  },
]);
