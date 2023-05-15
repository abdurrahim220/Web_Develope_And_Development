import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddUser from './component/AddUser.jsx';
import UpdateInfo from './component/UpdateInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/userInfo')
  },
  {
    path:'/userinfo',
    element:<AddUser></AddUser>
  },{
    path:'/updateInfo/:id',
    element:<UpdateInfo></UpdateInfo>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
