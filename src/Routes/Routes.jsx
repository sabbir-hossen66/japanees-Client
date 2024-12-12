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
import ManageVoca from "../Pages/AdminDashboardPages/ManageVoca";
import Learning from "../Pages/Learning/Learning";
import Profile from "../Pages/CommonDashboard/Profile";
import AdminRoute from "./AdminRoute";


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
        path: "/learning",
        element: <PrivateRoute> <Learning /></PrivateRoute>
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
        index: true,
        element: <Lessons />,
        loader: () => fetch('https://japanes-language-server.vercel.app/lesson')
      },
      {
        path: "lessons",
        element: <Lessons />,
        loader: () => fetch('https://japanes-language-server.vercel.app/lesson')
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "add-lessons",
        element: <AdminRoute> <AddLesons /></AdminRoute>
      },
      {
        path: "add-vocabularies",
        element: <AdminRoute> <AddVocabulary /></AdminRoute>
      },
      {
        path: "manage-users",
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: "manage-voca",
        element: <ManageVoca />,
        loader: () => fetch('https://japanes-language-server.vercel.app/get-vocabulary')
      }
    ]
  }
]);
