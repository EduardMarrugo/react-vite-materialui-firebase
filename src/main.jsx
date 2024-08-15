import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
    <>
        <CssBaseline />
        <RouterProvider router={router} />
    </>
);
