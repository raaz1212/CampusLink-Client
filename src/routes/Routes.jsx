import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Admission from "../Pages/Admission/Admission";
import PrivateRoute from "./PrivateRoute";
import PrivateRout from "./PrivateRoute";
import MyCollege from "../Pages/Mycollege/Mycollege";
import MyProfile from "../Pages/MyProfile/Myprofile";
import EditProfile from "../Pages/MyProfile/EditProfile";
import SearchResult from "../Pages/Home/Search/Search";
import AdmissionBooking from "../Pages/Admission/AdmissionBooking";
import MyCollegeDetails from "../Pages/Mycollege/MyCollegeDetails";
import ErrorPage from "../Pages/ErrorPage.jsx/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/colleges/${params.id}`),
      },
      {
        path: "/addreview/:id",
        element: (
          <PrivateRoute>
            <MyCollegeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/bookings/${params.id}`),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRout>
            <AdmissionBooking />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/colleges/${params.id}`),
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRout>
            <MyCollege />
          </PrivateRout>
        ),
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/search-result",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
