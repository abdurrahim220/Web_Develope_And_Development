import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RegisterRBS from './component/RegisterRBS/RegisterRBS';
import RegisterBS from './component/RegisterBS/RegisterBS';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: '/login',
        element: <Login />
      }
      , {
        path: '/register',
        element: <Register />
      }, {
        path: '/register-rbs',
        element: <RegisterRBS />
      },
      {
        path: '/register-bs',
        element: <RegisterBS />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
