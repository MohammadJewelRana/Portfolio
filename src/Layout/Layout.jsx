import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import FooterNew from '../Update/FooterNew';
 

const Layout = () => {
    return (
        <div>


            <Navbar></Navbar>
            {/* <NavbarNew></NavbarNew> */}
            <Outlet></Outlet>
            <FooterNew></FooterNew>
            {/* <Footer></Footer> */}
           

        </div>
    );
};

export default Layout;