import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Donors from "../Pages/Donors/Donors";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import HomeDash from "../Dashboard/HomeDash";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donors",
                element: <Donors></Donors>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path: "home",
                element:<HomeDash></HomeDash>
            },
        ]
    }
]);
