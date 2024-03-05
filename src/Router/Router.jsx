import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import AddProjects from '../Backend/AddProjects';
import AdminLayout from '../Backend/Admin/LayoutAdmin/AdminLayout';
import AdminHome from '../Backend/Admin/AdminHome/AdminHome';
import AdminDashboard from '../Backend/Admin/AdminDashboard/AdminDashboard';
import Frontend from '../Backend/Admin/Pages/Frontend';
import Fullstack from '../Backend/Admin/Pages/Fullstack';
import Update from '../Backend/Admin/Pages/Update';
 
 

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
    // {
    //     path:'/add',
    //     element:<AddProjects></AddProjects>
    // },
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
                    },
                    {
                        path:'/admin/new',
                        element:<AddProjects></AddProjects>
                    },
                    {
                        path:'/admin/frontend',
                        element:<Frontend></Frontend>
                    },
                    {
                        path:'/admin/fullstack',
                        element:<Fullstack></Fullstack>
                    },
                    {
                        path:'/admin/update/:id',
                        element:<Update></Update>
                    }
                ]
            }
        ]
    }





])

export default router;