import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../page/Home/Home/Home";
import Menu from "../menu/Menu";
import Order from "../page/Order/Order/Order";

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
                path:'/order',
                element:<Order></Order>
            }
        ]
    },
]);

export default router;