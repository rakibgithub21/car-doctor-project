import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Account/Login";
import SignUp from "../pages/Account/SignUp";
import Chekout from "../pages/Chekout/Chekout";
import Booking from "../pages/Bookings/Booking";

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
            {
                path: '/checkout/:id',
                element: <Chekout></Chekout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element:<Booking></Booking>
            }
        ],
    
    },
]);