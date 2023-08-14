import { MdOutlineOpenInNew } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IProject } from '../data/types';
import Button from './Button';

interface IProjectLinksProps {
  project: IProject;
}

export default function ProjectLinks({ project }: IProjectLinksProps) {
  return (
    <div className='flex gap-4 justify-between flex-col md:flex-row'>
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
