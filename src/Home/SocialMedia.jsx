import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        // <div className='lg:flex fixed flex-col hidden   top-[35%] left-0  '>
        <div className='lg:flex fixed flex-col    top-[35%] left-60 hidden '>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                <Link to='https://www.facebook.com/shahida.akhter.353250' className='flex justify-between items-center w-full text-gray-300 ml-4'> Facebook <FaFacebook className='mr-6 text-2xl'></FaFacebook> </Link>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'>
                <Link to='https://github.com/ShahidaAkter1' className='flex justify-between items-center w-full text-gray-300 ml-4'> Github <FaGithub className='mr-6 text-2xl'></FaGithub> </Link>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-600'>
                <Link to='https://www.linkedin.com/in/shahida-akter-235364279/' className='flex justify-between items-center w-full text-gray-300 ml-4'> Linkedin <FaLinkedin className='mr-6 text-2xl'></FaLinkedin> </Link>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                <Link to='https://mail.google.com/mail/u/0/#inbox' className='flex justify-between items-center w-full text-gray-300 ml-4'> Gmail <FaFacebook className='mr-6 text-2xl'></FaFacebook> </Link>
            </li> */}
        </ul>
    </div>
    );
};

export default SocialMedia;


 