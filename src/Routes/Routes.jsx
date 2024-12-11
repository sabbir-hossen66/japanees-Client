import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Shared/ErrorPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashboardContent from "../Layout/DashboardContent";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import PrivateRoute from "./PrivateRoute";
import Tutorials from "../Pages/Tutorials/Tutorials";
import AddLesons from "../Pages/AdminDashboardPages/AddLesons";
import Lessons from "../Pages/AdminDashboardPages/Lessons";
import AddVocabulary from "../Pages/AdminDashboardPages/AddVocabulary";
import ManageUsers from "../Pages/AdminDashboardPages/ManageUsers";

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
      // {
      //   path: "/lesson",
      //   element: <PrivateRoute> <Lessons /></PrivateRoute>
      // },
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
        path: "lessons",
        element: <Lessons />,
        loader: () => fetch('http://localhost:8000/lesson')
      },
      {
        path: "add-lessons",
        element: <AddLesons />
      },
      {
        path: "add-vocabularies",
        element: <AddVocabulary />
      },
      {
        path: "manage-users",
        element: <ManageUsers />
      }
    ]
  }
]);
