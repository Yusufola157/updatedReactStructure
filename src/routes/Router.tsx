import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import DashLayout from "../layout/dashboardlayout/DashLay";
import DashLayout from "../layout/dashboardlayout/DashLay";
// import { Home } from "../components/pages";
// import { DashbOard } from "../components/blocks";
import { DashbOard } from "../components/blocks/homepageblock";
import { Home } from "../components/pages";

export const element = createBrowserRouter([
    {
        path:"/",
        element:<DashLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])