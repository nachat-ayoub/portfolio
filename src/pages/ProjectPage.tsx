import { useLoaderData } from 'react-router-dom';
import { IProject } from '../data/types';
import Title from '../components/Title';
import React from 'react';
import ReadmePreview from '../components/ReadmePreview';
import Button from '../components/Button';
import { IconContext } from 'react-icons';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';

interface IProjectProps {
  project: IProject;
}

const Project: React.FC = () => {
  const { project } = useLoaderData() as IProjectProps;
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <div className='w-full py-4 px-2 md:px-20 lg:px-36 flex flex-col gap-y-6'>
        <Title content={project?.title} />
        <p>{project?.description}</p>

        {/* //* Links */}
        <div className='flex justify-between'>
          <Button target='_blank' href={project.liveDemo?.url ?? '#'}>
            <IconContext.Provider value={{ size: '18' }}>
              <div className='mr-2'>
                <MdOutlineOpenInNew />
              </div>
            </IconContext.Provider>
            <span>visit the website</span>
          </Button>

          <Button
            target='_blank'
            href={project.githubRepo ?? '#'}
            color='secondary'
          >
            <IconContext.Provider value={{ size: '18' }}>
              <div className='mr-2'>
                <ImGithub />
              </div>
            </IconContext.Provider>
            <span>github repository</span>
          </Button>
        </div>

        <div className='w-full mb-10'>
          <img
            className='w-full object-cover'
            src={project?.image}
            alt={project?.title}
          />
        </div>

        {/* Readme */}
        {project?.githubRepo && <ReadmePreview repoUrl={project.githubRepo} />}
      </div>
    </div>
  );
};

export default Project;
