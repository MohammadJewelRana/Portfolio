import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import AddProjects from '../Backend/AddProjects';
 
 

const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
      
        ]
    },
    {
        path:'/add',
        element:<AddProjects></AddProjects>
    }





])

export default router;