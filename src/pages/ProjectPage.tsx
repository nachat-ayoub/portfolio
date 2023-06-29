import { useLoaderData } from 'react-router-dom';
import { IProject } from '../data/types';
import Title from '../components/Title';
import React from 'react';

interface IProjectProps {
  project: IProject;
}

const Project: React.FC = () => {
  const { project } = useLoaderData() as IProjectProps;
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <div className='w-full py-4 px-2 md:px-10 flex flex-col gap-y-6'>
        <Title content={project?.title} />
        <p>{project?.description}</p>
        <div className='w-full'>
          <img src={project?.image} alt={project?.title} />
        </div>
      </div>
    </div>
  );
};

export default Project;
