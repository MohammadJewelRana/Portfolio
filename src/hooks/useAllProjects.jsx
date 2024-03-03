import React from 'react';
import { useQuery } from 'react-query';

const useAllProjects = () => {


  const { data: projects = [], isLoading: projectsLoading, refetch } = useQuery({
    queryKey: ["projects"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('https://portfolio-server-psi-lake.vercel.app/projects');
      // console.log(res);
      return res.json();
    },
  });

  return [projects, projectsLoading, refetch];
};

export default useAllProjects;