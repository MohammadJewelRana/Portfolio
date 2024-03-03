import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import AddProjects from '../Backend/AddProjects';
import Details from '../Home/Details';
 

const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            }
        ]
    },
    {
        path:'/add',
        element:<AddProjects></AddProjects>
    }





])

export default router;