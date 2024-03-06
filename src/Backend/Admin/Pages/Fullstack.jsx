import React, { useState } from 'react';
import AdminTitle from '../AdminShared/AdminTitle';
import useAllProjects from '../../../hooks/useAllProjects';
import Loading from '../../../Shared/Loading';
import ManageCard from './ManageCard';
import Modal from '../../../Home/Project/Modal';


const Fullstack = () => {

    const [modalData, setModalData] = useState([]);
    const [projects, projectsLoading, refetch] = useAllProjects();
    // console.log(projects);


    const fullStack = projects.filter(item => item.category === 'Mern');
    // console.log(fullStack);
    if (projectsLoading) {
        return <Loading></Loading>
    }

    const handleModal = (id) => {
        // console.log(id);
        const findData = projects.find(item => item._id === id);
        setModalData(findData)

    }

    return (
        <div>
            <AdminTitle heading={'full stack'}></AdminTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-12 mt-10'>



                {
                    fullStack.map(item => <ManageCard
                        detailsData={item}
                        handleModal={handleModal}
                        refetch={refetch}

                    ></ManageCard>)
                }





            </div>
            <Modal modalData={modalData}></Modal>
        </div>
    );
};

export default Fullstack;