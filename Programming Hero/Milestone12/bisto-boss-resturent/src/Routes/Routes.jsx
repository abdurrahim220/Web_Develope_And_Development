import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../page/Home/Home/Home";
import Menu from "../menu/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../page/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivateRoutes><Order></Order></PrivateRoutes>
            }
            , {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'myCart',
                element:<MyCart></MyCart>
            }
        ]
    }
]);

export default router;