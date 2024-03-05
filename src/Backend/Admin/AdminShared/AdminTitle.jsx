import React from 'react';

const AdminTitle = ({heading}) => {
    return (
        <div className='my-4 md:my-12 text-center bg-gray-400 rounded-lg shadow-md w-full p-4'>
        <p className='text-4xl font-bold text-red-600 capitalize '>{heading}</p>

    </div>
    );
};

export default AdminTitle;