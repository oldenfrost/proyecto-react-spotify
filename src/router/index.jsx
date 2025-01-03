import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import CreateTrack from "../pages/CreateTack/CreateTrack";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../utilities/ProctectedRoute";
import PublicRoute from "../utilities/PublicRoute";
import SearchTrack from "../pages/SearchTrack/SearchTrack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "CreateTrack",
        element: <CreateTrack />,
      },
      {
        path: "SearchTrack",
        element: <SearchTrack />,
      },
    ],
  },

]);
