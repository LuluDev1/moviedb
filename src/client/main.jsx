// STYLING (REMEMBER REACT BUNDLES ALL THE STYLES TOGETHER  )
import "./index.css";

// REACT COMPONENTS AND ROUTING
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// THE DIFFRENT PAGES
import Auth from "./pages/Auth";
import Explore from "./pages/Explore";

// DEIFINE SPECIFIC ROUTES FOR THE PAGES
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

// RENDERING THE APP
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
