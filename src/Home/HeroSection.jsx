import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../assets/InShot_20230803_170208594.jpg'
import animation from '../../public/animation.gif'



const HeroSection = () => {


  return (

    <div id='home' className="     bg-[#0a192f] text-white pt-24 mb-12 pb-12 ">



      <div className=" flex flex-col lg:flex-row-reverse items-center justify-center   max-w-7xl mx-auto">
        <div className=" ">
          <img src={img} alt='' className="w-[400px] h-[400px] lg:w-[700px] lg:h-[600px] lg:mr-96  rounded-full px-12  py-12" />
        </div>

        <div className='max-w-[1000px] lg:ml-36 lg:py-24  flex flex-col justify-center h-full mx-8'>

          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-white my-2'>Md.Jewel Rana</h1>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a MERN Stack Developer</h1>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I have a strong set of technical skills, excellent teamwork abilities, a passion for learning, a keen eye for detail, and a deep commitment to delivering high-quality work.</p>


          <div>
            {/* <button className="btn btn-outline btn-success group mt-4">
              <a href="../../public/CV.pdf" download='CV'>Download CV </a>
              <FaArrowRight className='group-hover:rotate-90 duration-300 text-2xl ml-4'></FaArrowRight></button> */}

            <button className="btn btn-outline btn-success group mt-4">
              <a href="/CV.pdf" download='CV'>Download CV</a>
              <FaArrowRight className='group-hover:rotate-90 duration-300 text-2xl ml-4'></FaArrowRight>
            </button>
          </div>

        </div>

      </div>



    </div>



  );
};

export default HeroSection;


