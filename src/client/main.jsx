import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from "./pages/Auth";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
    },
    {
        path: "/explore",
        element: <Explore />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
