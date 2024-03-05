import React from 'react';
 
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../AdminShared/AdminNavbar';
 

const AdminLayout = () => {
    return (
        <div>
             {/* <Navbar></Navbar> */}
<AdminNavbar></AdminNavbar>
            <Outlet></Outlet>




        </div>
    );
};

export default AdminLayout;