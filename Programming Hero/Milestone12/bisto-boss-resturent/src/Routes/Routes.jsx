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
import AllUsers from "../page/Dashboard/AllUsers/AllUsers";
import AddItem from "../page/Dashboard/AddItem/AddItem";

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
                element: <Order></Order>
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
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            }
            ,
            {
                path:'addItem',
                element:<AddItem></AddItem>
            }
        ]
    }
]);

export default router;