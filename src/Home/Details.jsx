import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import { FaBeer, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Details = () => {
    const projectId = useParams();
    const { id } = projectId;
    // console.log(id);




    const [projects, loading] = useProjects();
    //  console.log(projects);
    if (loading) {
        return <span className="loading loading-dots loading-lg my-32 mx-[50%] text-black"> </span>
    }

    const details = projects.filter(detailsData => detailsData._id === id);
    // console.log('details data', details[0]);




    const { category, clientLink, description, feature, image, liveLink, projectName, serverLink, technology } = details[0];
    // console.log(technology);


    return (
        <div id='home' className='bg-[#0a192f] text-white' name='home'>
            <div className="card-body max-w-[1200px] pt-20  py-40">


                <div className=' '>

                    <div className="card mt-12 w-full h-auto  shadow-2xl">

                        {/* <figure><img src={image} alt="Album"/></figure> */}
                        <div>

                          
                        
                            <div className='flex mb-8  md:ml-24  lg:ml-24 '>
                                <FaHome className='mt-1 mr-4'></FaHome>
                                <p> <Link to='/' className='text-blue-600'>Home</Link> <span>/ Project Details / {projectName}</span></p>

                            </div>


                            <img src={image} alt="" className='mx-auto' />
                        </div>

                        <div className="card-body lg:mx-20 -ml-10 h-auto">

                            <table className='text-left w-full '>

                                <tr className='  border-b-2 '>
                                    <th className='py-4 me-9 '>Name of the Project</th>
                                    <th className='py-4  pl-[16px]'> {projectName ? projectName : 'null'}</th>
                                </tr>

                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Live Link</th>
                                    <th className='py-4 pl-[16px] text-[10px]' >  {liveLink ? liveLink : 'null'}  </th>
                                </tr>
                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Client Link</th>
                                    <th className='py-4 pl-[16px] text-[10px]' >{clientLink ? clientLink : 'null'}  </th>
                                </tr>
                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Server Link</th>
                                    <th className='py-4 pl-[16px] text-[10px]' >  {serverLink ? serverLink : 'null'}  </th>
                                </tr>


                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Category</th>
                                    <th className='py-4 pl-[16px]' >  {category ? category : 'null'}  </th>
                                </tr>


                                 <tr className='  border-b-2 '>
                                    <th className='py-4'>Technology Used</th>
                                    <th className='py-4 pl-[16px]' >

                                        {
                                            technology.map(data => <li className='mb-2'>{data}</li>)
                                        }
                                    </th>
                                </tr>  

                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Features  </th>
                                    <th className='py-4 pl-[16px]' >

                                        {
                                            feature.map(data => <li className='mb-4 '>{data}</li>)
                                        }
                                    </th>
                                </tr> 


                                <tr className='  border-b-2 '>
                                    <th className='py-4'>Details</th>
                                    <th className='py-4 pl-[16px]' >  {description ? description : 'null'}  </th>
                                </tr>






                            </table>
                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
};

export default Details;

