import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { HashLink } from 'react-router-hash-link';


const FooterNew = () => {


    return (
        <div className=' bg-[#0e2446] p-8'>
            {/* <div className='my-32 bg-[#494647] p-8'> */}

            <div className='flex'>

                <img src={logo} className='h-12 w-12 rounded-full mx-auto mb-4' alt="" />
            </div>
            <div className='flex items-center justify-center gap-8 text-[16px] text-white opacity-80'>
                <HashLink to='#home' className='hover:text-green-500 transition-all duration-300'>Home</HashLink>
                <HashLink to='#aboutPage' className='hover:text-green-500 transition-all duration-300'>About</HashLink>

                <HashLink to='#skill' className='hover:text-green-500 transition-all duration-300'>Skills</HashLink>
             
                <HashLink to='#work' className='hover:text-green-500 transition-all duration-300'>Project</HashLink>
                <HashLink  smooth to='/#contact'  className='hover:text-green-500 transition-all duration-300'>Contact</HashLink>

               
            </div>

            <div className='flex items-center justify-center gap-8 text-xl text-white opacity-80 my-8'>
                <Link to='https://www.facebook.com/profile.php?id=100011573768588' target="_blank" className='text-green-500  transition-all duration-300'> <FaFacebook className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaFacebook></Link>


                <Link to="mailto:js.rana0326@gmail.com" title='js.rana0326@gmail.com '  target="_blank" className='text-green-500 transition-all duration-300'>  <FaMailBulk className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaMailBulk></Link>
                
                <Link to='https://wa.me/+01533850435'    className='text-green-500 transition-all duration-300'>       <FaWhatsapp className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaWhatsapp></Link>
            </div>

            <p className='text-center text-green-400'>Copyright © 2024 - All right reserved by <span className='text-white'>Md.Jewel Rana</span></p>

        </div>
    );
};

export default FooterNew;