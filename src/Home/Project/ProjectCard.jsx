import React from 'react';
import image from '../../assets/InShot_20230803_170208594.jpg'
import { Link } from 'react-router-dom';
const ProjectCard = ({detailsData}) => {
 
    // console.log(detailsData);
    const {_id,projectName,clientLink,liveLink,category,description,feature,image}=detailsData;
  
    return (
        <div>

 
<div className=' group'>
                    <div className='relative w-96 overflow-hidden'>
                        <img src={image} className='h-64 w-76' alt="" />
                        <div className='absolute h-full  w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            <button className=' transition-all duration-300 hover:bg-gray-200  border rounded-lg px-8 py-2 text-xl text-black font-bold bg-gray-300'>View</button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default ProjectCard;