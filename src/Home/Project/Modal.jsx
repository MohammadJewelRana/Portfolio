import React from 'react';
import { Link } from 'react-router-dom';
import { FaFeatherPointed } from "react-icons/fa6";


const Modal = ({ modalData }) => {
    const { _id: modalId, projectName: modelProjectName, clientLink: modalClientLink, liveLink: modalLiveLink, category: modalCategory, description: modalDescription, feature: modalFeature, image: modalImage, serverLink, technology, serverLinkGithub } = modalData;

    console.log(modalData);
    return (
        <div>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-white shadow-2xl text-black">
                    <div className=' '>
                        <h1 className='text-4xl font-bold text-center my-6'> {modalCategory} project</h1>
                        <div className='flex' >
                            <img src={modalImage} className='mx-auto h-48' alt="" />

                        </div>
                        <h1 className='font-semibold text-center my-4 text-2xl italic text-green-600'>  {modelProjectName}</h1>
                        <hr className='my-4' />

                        <div className='flex md:justify-center px-8 gap-12 mt-8 flex-wrap md:flex-nowrap'>
                            <div className='md:w-1/2'>

                                <div className='my-4 flex gap-4 flex-wrap text-[13px] md:text-xl'>

                                    {
                                        modalLiveLink &&
                                        <Link className='text-green-500 underline   ' to={modalLiveLink} title='Click to go  Live Link'>Live Link</Link>
                                    }

                                    {
                                        serverLink &&
                                        <Link className='text-green-500 underline   ' to={serverLink} title='Click to go server Link'>Server Link</Link>
                                    }
                                    {
                                        modalClientLink &&
                                        <Link className='text-green-500 underline   ' to={modalClientLink} title='Click to go Github Link'>Github  Client</Link>
                                    }
                                    {
                                        serverLinkGithub &&
                                        <Link className='text-green-500 underline   ' to={serverLinkGithub} title='Click to go Github Link'>Github Server  </Link>
                                    }




                                </div>
                                <div>
                                    <div className='text-[16px] leading-7 flex  gap-4 text-justify'>

                                        <p> <span className='font-semibold'>Description:</span> {modalDescription}</p>
                                    </div>
                                </div>


                                {
                                    technology ?

                                        <>
                                            <div className=' gap-4 capitalize text-xl mt-4 '>
                                                <h1 className='font-semibold mb-4'>project technology :</h1>
                                                <div className='text-[14px] '>
                                                    {
                                                        technology?.map((item, index) =>
                                                            <div className='flex items-center gap-4 '> <FaFeatherPointed className='text-green-500'></FaFeatherPointed>
                                                                <p>  {item}</p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <p >No available content right now!!!</p>
                                        </>
                                }

                            </div>

                            <div className='md:w-1/2'>
                                <div className=' gap-4 capitalize text-xl  '>
                                    <h1 className='font-semibold'>project feature :</h1>
                                    <div className='text-[18px] '>
                                        {
                                            modalFeature?.map((item, index) =>
                                                <div className=' my-2 flex items-center gap-3'>

                                                    <span className='flex '>
                                                        <div className='border border-green-600 my-4 mr-4'></div>
                                                       {item}
                                                         

                                                    </span>
                                                    <div className='   my-4'></div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>





                            </div>

                        </div>


                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn bg-green-500 text-black border-none outline-none hover:bg-green-400">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;