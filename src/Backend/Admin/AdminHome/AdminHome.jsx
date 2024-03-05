import React from 'react';
import AdminSidebar from '../AdminShared/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div>
            <div className='flex gap-8'>
                <div className='hidden md:block transition-all duration-500 md:w-[280px]  bg-gray-100 h-screen  '>
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className='mt-20  md:mx-8 w-full'>

                    {/* <SideLayout></SideLayout> */}
                    <Outlet> </Outlet>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;