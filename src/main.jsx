import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider  from './utilities/AuthContext';

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
 // <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  //</StrictMode>
);
