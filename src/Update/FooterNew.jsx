import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'


const FooterNew = () => {


    return (
        <div className=' bg-[#0e2446] p-8'>
        {/* <div className='my-32 bg-[#494647] p-8'> */}

<div className='flex'> 

    <img src={logo} className='h-12 w-12 rounded-full mx-auto mb-4' alt="" />
</div>
            <div className='flex items-center justify-center gap-8 text-[16px] text-white opacity-80'>
                <Link to=' ' className='hover:text-green-500 transition-all duration-300'>Home</Link>
                <Link to=' ' className='hover:text-green-500 transition-all duration-300'>About</Link>
                <Link to=' ' className='hover:text-green-500 transition-all duration-300'>Skills</Link>
                <Link to=' ' className='hover:text-green-500 transition-all duration-300'>Project</Link>
                <Link to=' ' className='hover:text-green-500 transition-all duration-300'>Contact</Link>
            </div>

            <div className='flex items-center justify-center gap-8 text-xl text-white opacity-80 my-8'>
                <Link to=' ' className='text-green-500  transition-all duration-300'> <FaFacebook className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaFacebook></Link>


                <Link to=' ' className='text-green-500 transition-all duration-300'>  <FaMailBulk className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaMailBulk></Link>
                <Link to=' ' className='text-green-500 transition-all duration-300'>       <FaWhatsapp className='text-5xl p-2 border border-green-500 rounded-full hover:bg-green-500 hover:text-white'></FaWhatsapp></Link>
            </div>

     <p className='text-center text-green-400'>Copyright © 2024 - All right reserved by <span className='text-white'>Md.Jewel Rana</span></p> 

        </div>
    );
};

export default FooterNew;