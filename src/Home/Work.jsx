import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useProjects from '../hooks/useProjects';
import useAllProjects from '../hooks/useAllProjects'
import WorkDetails from './WorkDetails';
import SectionTitle from '../Shared/SectionTitle';
// import Modal from './Modal';

const Work = () => {

    const [state,setState]=useState(true);


    // const [projects] = useProjects();
    const [ projects, projectsLoading, refetch]=useAllProjects();
    // console.log(projects);

    // if(projectsLoading){
    //     return <p>Loading......</p>
    // }

    const react = projects.filter(reactData => reactData.category === 'React JS');
    // console.log( 'react data', react);

    const html = projects.filter(reactData => reactData.category === 'HTML & CSS');
    // console.log( 'html data', html);

    const js = projects.filter(reactData => reactData.category === 'JavaScript');
    // console.log( 'js data', js);
    const mern = projects.filter(reactData => reactData.category === 'Mern');
    // console.log( 'mern data', mern);




    const [showData, setShowData] = useState([]);

    const handleData = (type) => {

        if (type === 'all') {

            setState(false);
            setShowData(projects);
        }
        else if (type === 'js') {
            setState(false);
            setShowData(js)
        }
        else if (type === 'react') {
            setState(false);
            setShowData(react);
        }
        else if (type === 'html') {
            setState(false);
            setShowData(html);
        }
        else if (type === 'mern') {
            setState(false);
            setShowData(mern);
        }


    }







    return (
        <div id='work' name='work' className=' text-black w-full pt-16 '>
          
          
            <div className='max-w-7xl mx-auto p-6 flex flex-col justify-center w-full h-full'>
          

                <SectionTitle title={'Projects'} subText={'Check out some of my recent work. '}></SectionTitle>

                {/* button */}
                <div className='gap-8 mx-auto '>
                    <button onClick={() => handleData('all')} className="btn btn-outline btn-warning font-bold text-2xl m-4">ALL</button>
                    {/* <button onClick={() => handleData('html')} className="btn btn-outline btn-primary m-4 font-bold text-2xl">HTML & CSS</button> */}
                    <button onClick={() => handleData('js')} className="btn btn-outline btn-secondary m-4 font-bold text-2xl">JAVASCRIPT</button>
                    <button onClick={() => handleData('react')} className="btn btn-outline btn-error m-4 font-bold text-2xl">REACT JS</button>
                    <button onClick={() => handleData('mern')} className="btn btn-outline btn-warning m-4 font-bold text-2xl">  MERN</button>
                </div>


                {/* container  */}
                <div className='w-full  grid  md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>
                    {state &&
                        projects.map(categoryData => <WorkDetails
                            key={categoryData._id}
                            categoryData={categoryData}
                        ></WorkDetails>)
                    }


                    {
                        showData.map(categoryData => <WorkDetails
                            key={categoryData._id}
                            categoryData={categoryData}
                        ></WorkDetails>)
                    }
                    {/* <Modal></Modal> */}

                </div>

            </div>



        </div>
    );
};

export default Work;