import React from 'react';

const SectionTitle = ({title,subText,extra}) => {
    return (
        <div className='flex items-center justify-center  '>
            

                  
            <div className='text-center'>
                    <p className='text-4xl  py-4 inline font-bold border-b-4 border-green-600  text-green-500'>  {title}</p>
                    <p className='pt-12 pb-4 text-xl font-semibold opacity-75'>{subText} <span className='text-red-500'>{extra}</span></p>
                </div>

        </div>
    );
};

export default SectionTitle;