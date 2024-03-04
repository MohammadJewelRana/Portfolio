import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import image from '../../assets/pexels-designecologist-1779487.jpg'


import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './ProjectCard';
import useProjects from '../../hooks/useProjects';


const Project = () => {

    const [hovered, setHovered] = useState(false);
    const [status, setStatus] = useState(false);
    const [data, setData] = useState([]);

    const [projects, projectsLoading, refetch] = useProjects();
    console.log(projects);

    const frontend = projects.filter(item => item.category === 'Frontend');
    console.log(frontend);

    const fullStack = projects.filter(item => item.category === 'Mern');
    console.log(fullStack);
    if (projectsLoading) {
        return <p>Loading...</p>
    }

    // const [data,setData]=useState(frontend);
    // console.log(data);


    const handleManage = (e) => {

        if(e==='all'){
            setData(projects);
            setStatus(true)
        }  
        else if(e==='frontend'){
            setData(frontend);
            setStatus(true)
        }
        else if(e==='fullStack'){
            setData(fullStack);
            setStatus(true)
        }
        else{
         console.log('Error occured');
        }
         
        // console.log(e);
    }


    return (
        <div id='work' name='work' className=' text-black w-full pt-16 max-w-7xl mx-auto'>

            <SectionTitle title={'Projects'} subText={'Check out some of my recent work. '}></SectionTitle>
            <div className='bg-gray-300 p-4'>

                <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-16 my-4 md:my-8 '>
                    <button className='bg-green-600  px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-green-500 w-36'
                        onClick={() => handleManage('all')}

                    >All</button>


                    <button className='bg-green-600 px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-green-500 w-36'    onClick={() => handleManage('frontend')}>Frontend</button>
                    <button className='bg-green-600 px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-green-500 w-36'    onClick={() => handleManage('fullStack')}>Full Stack</button>


                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4'>

                    {
                        status ?

                            <>
                                {
                                    data.map(item => <ProjectCard
                                        detailsData={item}

                                    ></ProjectCard>)
                                }
                            </> :
                            <>
                                {
                                    projects.map(item => <ProjectCard
                                        detailsData={item}

                                    ></ProjectCard>)
                                }

                            </>
                    }


                </div>



                {/* 
                <div className=' group'>
                    <div className='relative w-96 overflow-hidden'>
                        <img src={image} className='h-64 w-76' alt="" />
                        <div className='absolute h-full  w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            <button className=' transition-all duration-300 hover:bg-gray-200  border rounded-lg px-8 py-2 text-xl text-black font-bold bg-gray-300'>View</button>
                        </div>
                    </div>
                </div> */}






            </div>
        </div>
    );
};

export default Project;