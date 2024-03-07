import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import profile from '../../../assets/InShot_20230803_170208594.jpg'

const AdminNavbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-200 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52  text-white  "
            >
              <li>
                {" "}
                <Link to="/admin">Dashboard</Link>
              </li>
              <li>
                {" "}
                <Link to="/admin/new">Create   Project</Link>
              </li>
              <li>
                {" "}
                <Link to="/admin/frontend">Frontend</Link>
              </li>
              <li>
                {" "}
                <Link to="/admin/fullstack">Full Stack</Link>
              </li>
              <li>
                {" "}
                <Link to="/admin"> Email  </Link>
              </li>
 
            </ul>
          </div>
          <Link to="/admin" className="btn btn-ghost text-xl">
            {" "}
            Jewel's <span className="text-red-400 font-semibold "> Portfolio</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-8">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img title="Md.Jewel Rana"
                  alt="Tailwind CSS Navbar component"
                  src={profile} 
                />
              </div>
            </div>

            <ul 
             
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52 "
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
