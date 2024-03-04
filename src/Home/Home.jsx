import React from 'react';
 
 
import SocialMedia from './SocialMedia';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Thanks from './Thanks';
import Project from './Project/Project';

 

const Home = () => {
    return (
        // <div id='home' className='bg-[#0a192f] text-white' name='home'>
        <div id='home' className='bg-white text-black' name='home'>  


            
            {/* <SocialMedia></SocialMedia> */}

            <HeroSection></HeroSection>

            
            <Project></Project>
            <About></About>
            <Skills></Skills>
            
            {/* <Experience></Experience> */}
         
            {/* <Work></Work> */}
            <Contact></Contact>
            <Thanks></Thanks>

 








        </div>


    );
};

export default Home;