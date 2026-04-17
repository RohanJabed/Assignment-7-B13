import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";;
import TimeLine from "../Pages/TimeLine";
import HomePage from "../Pages/HomePage";
import states from "../Pages/states";
import ErrorPage from "../Pages/ErrorPage";
import FriendsDetails from "../FriendsDetails/FriendsDetails";

export const router =createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:HomePage

        },
        {
           path:'/friends/:id',
           Component: FriendsDetails
        },
        {
            path:'/timeline',
            Component:TimeLine
        },
        {
            path:'/states',
            Component:states

        },
    
    ],

    errorElement:<ErrorPage></ErrorPage>
  }

])