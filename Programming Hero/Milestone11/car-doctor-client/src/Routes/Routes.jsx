import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../page/SignUp/SignUp";

import BookServices from "../page/BookServices/BookServices";
import Bookings from "../page/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/book/:id',
        element: <BookServices></BookServices>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>
        // element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }

    ]
  },
]);

export default router;