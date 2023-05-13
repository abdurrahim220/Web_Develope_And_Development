import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Users from './component/Users.jsx';
import Update from './component/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5001/users')
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5001/users/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
