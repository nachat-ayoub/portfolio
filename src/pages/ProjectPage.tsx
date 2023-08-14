import { MdOutlineOpenInNew } from 'react-icons/md';
import ReadmePreview from '../components/ReadmePreview';
import { useLoaderData } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import Button from '../components/Button';
import { IProject } from '../data/types';
import Title from '../components/Title';
import React from 'react';
import Alert from '../components/Alert';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectLinks from '../components/ProjectLinks';

interface IProjectProps {
  project: IProject;
}

const ProjectPage: React.FC = () => {
  const { project } = useLoaderData() as IProjectProps;
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      {/* //* Navigation */}
      <ProjectNavigation />

      {/* //* Body */}
      {project ? (
        <section className='w-full p-4 md:px-28 lg:px-40 flex flex-col gap-y-6'>
          <Title content={project?.title} />
          <p>{project?.description}</p>

          {/* //* Issue Alert if there is an issue */}
          {project?.issue && (
            <Alert message={project?.issue} type='warning' mode='light' />
          )}

          {/* //* Project Links */}
          <ProjectLinks project={project} />

          <div className='w-full'>
            <img
              className='w-full border border-gray-100 object-cover rounded shadow'
              src={project.image?.replace('/w_600', '/w_1200')}
              alt={project.title}
            />
          </div>

          {/* Readme */}
          {<ReadmePreview repoUrl={project.githubRepo} />}
        </section>
      ) : (
        <section className='w-full py-20 px-4 md:px-28 lg:px-40 flex flex-col gap-y-6'>
          <p className='text-center'>No project found with this id.</p>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
