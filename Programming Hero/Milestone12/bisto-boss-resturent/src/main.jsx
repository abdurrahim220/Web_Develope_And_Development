import React from 'react'
import ReactDOM from 'react-dom/client'


import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <AuthProvider>
      <HelmetProvider>

        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
          </React.StrictMode>,
        </QueryClientProvider>


      </HelmetProvider>
    </AuthProvider>
  </div>
)
