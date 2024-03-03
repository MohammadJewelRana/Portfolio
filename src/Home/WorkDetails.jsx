import React from 'react';
import { Link } from 'react-router-dom';

const WorkDetails = ({ categoryData }) => {
    // console.log(categoryData);
    const { _id, category, clientLink, description, features, image, liveLink, projectName, serverLink } = categoryData;

    return (
        <div style={{ backgroundImage: `url(${image})` }} className='shadow-lg shadow-[#040c16]  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div  '>

            <div className='opacity-0  group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    {category} application
                </span>
                <div className='pt-8 px-3 text-center gap-4 grid  md:grid-cols-2'>

                    <Link  to={clientLink}> <button className="btn btn-neutral text-white w-[120px]   btn-xs">Client Link</button></Link>
                    <Link  to={serverLink}> <button className="btn btn-accent text-white w-[120px]    btn-xs">Server Link</button></Link> 
                    <Link  to={liveLink}> <button className="btn btn-primary text-white w-[120px]      btn-xs">Live Link</button></Link>
                    <Link  to={`/details/${_id}`}>   <button className="btn btn-secondary text-white     w-[120px]  btn-xs">Details</button></Link>





                    {/* <button className="btn btn-secondary text-white" onClick={()=>window.my_modal_5.showModal(clientLink)}>Project Details</button> */}
                    {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

                </div>
            </div>
        </div>
    );
};

export default WorkDetails;