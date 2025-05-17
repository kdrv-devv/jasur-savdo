import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import Debts from "../components/home-components/debts";
import Firms from "../components/home-components/firms";



export const route = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
        children:[

            {
                path:"/",
                element:<Debts/>
            },
            {
                path:"/firms",
                element:<Firms/>
            }
        ]
    },
    {
        path:"/login",
        element:<LoginPage/>
    }
])