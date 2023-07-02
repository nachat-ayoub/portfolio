import {
  FaAngleLeft,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';
import { MdEmail, MdOutlineOpenInNew } from 'react-icons/md';
import ReadmePreview from '../components/ReadmePreview';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import Button from '../components/Button';
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
      {/* //* Navigation */}
      <ProjectNavigation />

      {/* //* Body */}
      {project ? (
        <section className='w-full p-4 md:px-28 lg:px-40 flex flex-col gap-y-6'>
          <Title content={project?.title} />
          <p>{project?.description}</p>

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

export default Project;

function ProjectNavigation() {
  const info = {
    facebook: 'https://www.facebook.com/NACHAT.AY0UB/',
    github: 'https://github.com/nachat-ayoub',
    twitter: 'https://twitter.com/nachatayoub1',
    linkedin: 'https://www.linkedin.com/in/ayoub-nachat-a92012201/',
    email: 'nachat.ayoub.freelancer@gmail.com',
  };

  return (
    <section className='p-4 md:p-6 flex justify-between'>
      {/* //* Back Button */}
      <Button color='secondary' href='/'>
        <IconContext.Provider value={{ size: '25' }}>
          <FaAngleLeft />
        </IconContext.Provider>
      </Button>

      {/* //* Social links */}
      <div className='flex w-fit gap-2'>
        <Button color='slate' target='_blank' href={info.github}>
          <IconContext.Provider value={{ size: '25' }}>
            <TbBrandGithubFilled />
          </IconContext.Provider>
        </Button>

        <Button color='indigo' target='_blank' href={info.facebook}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaFacebookF />
          </IconContext.Provider>
        </Button>

        <Button color='blue' target='_blank' href={info.linkedin}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaLinkedinIn />
          </IconContext.Provider>
        </Button>

        <Button color='sky' target='_blank' href={info.twitter}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaTwitter />
          </IconContext.Provider>
        </Button>

        <Button color='red' target='_blank' href={'mailto:' + info.email}>
          <IconContext.Provider value={{ size: '25' }}>
            <MdEmail />
          </IconContext.Provider>
        </Button>
      </div>

      {/*  */}
    </section>
  );
}

function ProjectLinks({ project }: { project: IProject }) {
  return (
    <div className='flex justify-between'>
      <Button target='_blank' href={project.liveDemo ?? '#'}>
        <IconContext.Provider value={{ size: '18' }}>
          <div className='mr-2'>
            <MdOutlineOpenInNew />
          </div>
        </IconContext.Provider>
        <span>visit the website</span>
      </Button>

      <Button
        target={'_blank'}
        href={project.githubRepo ?? `#`}
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
  );
}
