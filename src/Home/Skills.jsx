import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../Shared/SectionTitle';


const Skills = () => {

    const data = [
        { "_id": "1", "skill": "HTML", "image": "../../public/html.png" },
        { "_id": "2", "skill": "CSS", "image": "../../public/css.png" },
        { "_id": "3", "skill": "Bootstrap", "image": "../../public/BOOTSTRAP.avif" },
        { "_id": "4", "skill": "Tailwind", "image": "../../public/tailwind.png" },
        { "_id": "5", "skill": "JavaScript", "image": "../../public/javascript.png" },
        { "_id": "6", "skill": "React", "image": "../../public/react.png" },
        { "_id": "7", "skill": "Firebase", "image": "../../public/firebase.webp" },
        { "_id": "8", "skill": "NodeJS", "image": "../../public/nodejs.png" },
        { "_id": "9", "skill": "ExpressJS", "image": "../../public/express js.png" },
        { "_id": "10", "skill": "MongoDB", "image": "../../public/mongodb.png" },
        { "_id": "11", "skill": "Github", "image": "../../public/github.png" },
        { "_id": "12", "skill": "NextJS", "image": "../../public/nextJs.png" }
    ]



    // useEffect(() => {
    //     Aos.init(
    //         {
    //             duration: 200
    //         }
    //     );
    // })

    return (
        <div id='skill' name='skills' className=' text-gray-300 px-4' >
            <div className='max-w-7xl mx-auto p-4 flex flex-col  justify-center w-full h-full text-black'>
        <SectionTitle title={'Technical Skills'} subText={'hese are the technologies I have worked with.'}></SectionTitle>


                <div className='w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-12 text-center py-8'  >

                    {
                        data.map(item =>

                            <>
                                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-slate-50 rounded-lg p-2 md:p-6 cursor-pointer' 
                                // data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine"
                                
                                >
                                     <img className='p-2 w-24 h-24 mx-auto mt-3 rounded-full' src={item.image} alt="" />
                                    <p className='my-4 text-black font-bold text-2xl '>{item.skill}</p>
                                </div>
                            </>)
                    }





                </div>






            </div>


        </div>
    );
};

export default Skills;