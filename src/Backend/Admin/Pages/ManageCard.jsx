import React from 'react';
import { Link } from 'react-router-dom';

const ManageCard = ({ detailsData, handleModal }) => {

  const { _id, projectName, clientLink, liveLink, category, description, feature, image } = detailsData;


  return (
    <div className='z-1'>
      <div className='  mb-8  rounded-lg shadow-xl shadow-green-100 group'>
        <div className='relative   overflow-hidden'>
          <img src={image} className='h-64 w-[400px]' alt="" />

          <div className='absolute h-full  w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300' onClick={(e) => handleModal(_id)}>


            <button className="transition-all duration-300 hover:bg-gray-200  border rounded-lg px-8 py-2 text-xl text-black font-bold bg-gray-300 cursor-pointer " onClick={() => document.getElementById('my_modal_4').showModal()}>View</button>

          </div>
        </div>

        <div className='flex items-center justify-around  gap-4 my-2 pb-4 '>
        <Link to={`/admin/update/${_id}`}> <button className='px-4 py-2 bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-green-400' >Update</button></Link>
        <button className='px-4 py-2 bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-400'>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default ManageCard;