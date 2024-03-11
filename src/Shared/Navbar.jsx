import React, { useEffect, useState } from 'react';
// import logo from '../../public/logo.jpg'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'




const Navbar = () => {

    const navLinks = < >

        <li>        <NavLink to="/#home" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Home </NavLink></li>
 
     
  

        <li><HashLink smooth to='/#aboutPage'  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > About </HashLink>
        </li>

        <li><HashLink smooth to='/#skill'  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Skills </HashLink>
        </li>


        <li><HashLink smooth to='/#work'  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Project </HashLink>
        </li>
     

        <li>
            <HashLink smooth to='/#contact'  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Contact </HashLink>
        </li>

   

      
        
        

    </>


    return (
        <div id='header' className=' w-full bg-[#0e2446] '>
            <div className="navbar fixed z-10   bg-[#0e2446] text-white   mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52   ">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='ml-8'>
                        <img src={ logo} className='h-12 w-12 rounded-full' alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Jewel Rana</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}
                    </ul>
                </div>


        
        
                <div className="navbar-end mr-12">
                    <div className="dropdown dropdown-end">
                        {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                </div>


            </div>
        </div>
    );
};


export default Navbar;


