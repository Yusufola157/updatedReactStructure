import React,{lazy} from "react";
import { createBrowserRouter } from "react-router-dom";
import { Boundary } from "../utils/hoc/Boundary";
import { Dash } from "../layout";

// const HomePage = lazy (()=> import(("../pages/HomePage")))
import { Home } from "../pages/HomePage";

export const element=createBrowserRouter([
    {
        path:"/",
        element:<Dash/>,
        children:[
            {
                index:true,
                element:<Home/>,
                errorElement:<Boundary/>,
                hasErrorBoundary:true,
            }
        ]
    }
])