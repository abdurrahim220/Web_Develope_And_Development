import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";

import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";


import ClassForm from "../pages/Dashboard/ClassForm";
import InstructorClasses from "../pages/Dashboard/InstructorClasses";
import { Fade } from "react-awesome-reveal";
import PopularClasses from "../pages/Home/PopularClasses/PopularClasses";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'sss',
        element:<PopularClasses></PopularClasses>
      },
    ]
  },

  {
    path: 'classes',
    element: <Classes></Classes>
  }, 
  {
    path: '/dashboard',
    element: (

      <DashboardLayout />

    ),
    children: [
 
      { path: '/dashboard/add-classes', element:<Fade> <ClassForm></ClassForm> </Fade>},
      // { path: '/dashboard/my-bookings', element: <MyBookings /> },
      { path: '/dashboard/my-listings', element: <InstructorClasses></InstructorClasses> },
    ],
  },
]);

export default router;