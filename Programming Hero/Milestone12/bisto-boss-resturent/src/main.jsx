import React from 'react'
import ReactDOM from 'react-dom/client'


import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <AuthProvider>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>,
      </HelmetProvider>
    </AuthProvider>
  </div>
)
