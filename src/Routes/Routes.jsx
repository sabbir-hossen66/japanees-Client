import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Shared/ErrorPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashboardContent from "../Layout/DashboardContent";
import Create from "../Pages/Dashboard/Create";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Lessons from "../Pages/Lessons/Lessons";
import PrivateRoute from "./PrivateRoute";
import Tutorials from "../Pages/Tutorials/Tutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/lesson",
        element: <PrivateRoute> <Lessons /></PrivateRoute>
      },
      {
        path: "/tutorial",
        element: <PrivateRoute><Tutorials /></PrivateRoute>
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashboardContent />,
    children: [
      {
        path: "create",
        element: <Create />
      }
    ]
  }
]);
