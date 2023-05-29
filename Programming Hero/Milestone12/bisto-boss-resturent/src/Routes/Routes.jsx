import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../page/Home/Home/Home";
import Menu from "../menu/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },{
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            }
            ,{
                path:'/login',
                element:<Login></Login>
            },{
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    },
]);

export default router;