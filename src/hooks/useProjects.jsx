import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const useProjects = () => {


    const [projects,setProjects]=useState([])
    const [loading,setLoading]=useState(true);
    
   
  useEffect(()=>{
      fetch('http://localhost:5000/projects')
    //   fetch('https://portfolio-server-psi-lake.vercel.app/projects')
      .then(res=>res.json())
      .then(data=>{
          setProjects(data);
          setLoading(false)
          
      })
  } ,[])
  return [projects,loading];


};

export default useProjects;