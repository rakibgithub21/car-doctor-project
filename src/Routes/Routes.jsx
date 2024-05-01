import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/sign-in',
                element:<Login></Login>
            },
            {
                path: '/sign-up',
                element:<SignUp></SignUp>
            },
        ],
    
    },
]);