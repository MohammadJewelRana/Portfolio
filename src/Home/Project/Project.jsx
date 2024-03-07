import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import image from '../../assets/pexels-designecologist-1779487.jpg'


import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './ProjectCard';

import useAllProjects from '../../hooks/useAllProjects';
import Modal from './Modal';
import Loading from '../../Shared/Loading';


const Project = () => {

    const [hovered, setHovered] = useState(false);
    const [status, setStatus] = useState(false);
    const [data, setData] = useState([]);
    const [allButton, setAllButton] = useState(true)
    const [frontendButton, setFrontendButton] = useState(false)
    const [fullStackButton, setFullStackButton] = useState(false)
    const [modalData, setModalData] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(6);



    const [projects, projectsLoading, refetch] = useAllProjects();
    // console.log(projects);

    const frontend = projects.filter(item => item.category === 'Frontend');
    // console.log(frontend);

    const fullStack = projects.filter(item => item.category === 'Mern');
    // console.log(fullStack);
    if (projectsLoading) {
        return <Loading></Loading>
    }

    // const [data,setData]=useState(frontend);
    // console.log(data);
    const handleModal = (id) => {
        console.log(id);
        const findData = projects.find(item => item._id === id);
        setModalData(findData)

    }
    // console.log(modalData)


    const handleManage = (e) => {

        if (e === 'all') {
            setData(projects);
            setStatus(true)
            setAllButton(true)
            setFrontendButton(false)
            setFullStackButton(false)

        }
        else if (e === 'frontend') {
            setData(frontend);
            setStatus(true);
            setAllButton(false)
            setFrontendButton(true)
            setFullStackButton(false)

        }
        else if (e === 'fullStack') {
            setData(fullStack);
            setStatus(true);
            setAllButton(false)
            setFrontendButton(false)
            setFullStackButton(true)

        }
        else {
            console.log('Error occured');
        }

        // console.log(e);
    }

    const loadMoreProject = () => {
        setVisibleProjects(prev => prev + 3); // Increase the number of visible projects by 2
    };


    return (
        <div id='work' name='work' className=' text-black w-full pt-20 max-w-7xl mx-auto'>

            <SectionTitle title={'Projects'} subText={'Check out some of my recent work. '}></SectionTitle>
            <div className='  p-4'>

                <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-16 my-4 md:my-8 '>

                    <button className={` ${allButton ? 'bg-green-500' : 'bg-gray-600'}     px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-gray-500 w-36`}
                        onClick={() => handleManage('all')}
                    >All</button>


                    <button className={`${frontendButton ? 'bg-green-500' : 'bg-gray-600'}   px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-gray-500 w-36`} onClick={() => handleManage('frontend')}>Frontend</button>

                    <button className={`${fullStackButton ? 'bg-green-500' : 'bg-gray-600'}   px-6 py-2 text-xl rounded-l-full rounded-r-full text-white font-semibold transition-all duration-300 hover:bg-gray-500 w-36`} onClick={() => handleManage('fullStack')}>Full Stack</button>




                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-12 mt-10'>

                    {
                        status ?

                            <>

                                {
                                    data.slice(0, visibleProjects).map(item => <ProjectCard
                                        detailsData={item}
                                        handleModal={handleModal}

                                    ></ProjectCard>)
                                }
                                <div></div>
                                {visibleProjects < data.length ? (
                                    <div className='flex mt-4 justify-center '>
                                        <button className='px-8 py-4 bg-green-500 text-white rounded-l-full rounded-r-full transition-all duration-300 text-xl mx-auto hover:bg-green-600 ' onClick={loadMoreProject} >Load More Projects</button>
                                    </div>
                                ) : null}

                            </> :
                            <>
                                {
                                    projects.slice(0, visibleProjects).map(item => <ProjectCard
                                        detailsData={item}
                                        handleModal={handleModal}

                                    ></ProjectCard>)
                                }
                                <div></div>
                                {visibleProjects < projects.length ? (
                                    <div className='flex mt-4 '>
                                        <button className='px-8 py-4 bg-green-500 text-white rounded-l-full rounded-r-full transition-all duration-300 text-xl mx-auto hover:bg-green-600 ' onClick={loadMoreProject} >Load More Projects</button>
                                    </div>
                                ) : null}

                            </>
                    }


                </div>

            </div>

            <Modal modalData={modalData}></Modal>

        </div>
    );
};

export default Project;