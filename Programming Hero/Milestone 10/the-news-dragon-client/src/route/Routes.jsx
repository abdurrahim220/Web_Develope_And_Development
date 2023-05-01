import { createBrowserRouter } from "react-router-dom";
import MainL from "../layout/MainL";
import Home from "../page/Home/Home/Home";



const router =createBrowserRouter([
    {
        path:'/',
        element:<MainL></MainL>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;