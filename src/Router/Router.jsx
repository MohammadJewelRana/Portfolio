import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import AddProjects from '../Backend/AddProjects';
import AdminLayout from '../Backend/Admin/LayoutAdmin/AdminLayout';
import AdminHome from '../Backend/Admin/AdminHome/AdminHome';
import AdminDashboard from '../Backend/Admin/AdminDashboard/AdminDashboard';
 
 

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
    },
    {
        path:'/',
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                path:'/admin',
                element:<AdminHome></AdminHome>,
                children:[
                    {
                        path:'/admin',
                        element:<AdminDashboard></AdminDashboard>
                    }
                ]
            }
        ]
    }





])

export default router;