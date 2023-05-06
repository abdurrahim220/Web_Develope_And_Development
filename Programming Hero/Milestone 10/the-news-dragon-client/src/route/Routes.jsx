import { createBrowserRouter } from "react-router-dom";
import MainL from "../layout/MainL";
import Home from "../page/Home/Home/Home";
import Category from "../page/Shared/Catagory/Category";
import News from "../page/News/News";
import NewsLayout from "../layout/NewsLayout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainL></MainL>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element:<News/>

            }
        ]
    }
])

export default router;