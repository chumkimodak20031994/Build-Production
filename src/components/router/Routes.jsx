import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Children } from "react";
import Home from "../pages/Home";
import AllApps from "../pages/apps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
    ],
  },
]);
