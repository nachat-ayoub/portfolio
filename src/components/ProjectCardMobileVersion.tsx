import { IProject, ProjectStatusKeys } from '../data/types';
import { Link } from 'react-router-dom';
import Image from './Image';
import {
  FaRocket,
  FaCircleCheck,
  FaScrewdriverWrench,
  FaCircleExclamation,
} from 'react-icons/fa6';

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <Link
      className='w-full sm:w-[25.5rem] md:w-[20rem] lg:w-[25rem]'
      to={`/portfolio/projects/${project.id}`}
      title={project.title}
    >
      <div className='w-full border-gray-200 dark:border-none rounded-b-sm border overflow-hidden rounded-t-md dark:shadow-[#232433] dark:shadow-sm mx-auto'>
        <div className='relative w-full bg-[#ebebeb] py-1.5'>
          {/* //* buttons */}
          <div className='absolute top-1/2 -translate-y-1/2 px-2 flex gap-1.5'>
            <div className='bg-red-500/90 w-3 h-3 rounded-full' />
            <div className='bg-yellow-500/90 w-3 h-3 rounded-full' />
            <div className='bg-green-500/90 w-3 h-3 rounded-full' />
          </div>

          {/* //* title */}
          <div className='text-center text-xs text-[#8a8a8a] font-bold capitalize'>
            {project.title}
          </div>
        </div>

        <div className='overflow-hidden group relative w-full h-64 md:h-48 lg:h-64'>
          <div className='absolute h-full -translate-y-full group-hover:translate-y-0 p-4 w-full flex justify-center items-center bg-black/60 shadow-[0_0_150px_rgba(0,0,0,.75)_inset]'>
            <ul className='flex gap-2 justify-center flex-wrap items-center'>
              {project?.tags.map((tag, i) => (
                <li
                  key={tag}
                  className='tag text-[13px] active rounded-sm font-bold opacity-0 origin-bottom group-hover:animate-fadeDown'
                  style={{
                    animationDelay:
                      i * 0.02 + (1 - project?.tags.length / 10) * 0.2 + 's',
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            className='w-full h-full object-cover rounded-b-sm shadow'
            src={project.image}
            alt={project.title}
          />

          <div
            className={`absolute top-1.5 right-1.5 whitespace-nowrap text-white text-sm px-1.5 py-0.5 rounded-[50%] shadow-md flex items-center gap-1.5 w-[26px] h-[26px] ${
              ProjectStatusKeys[project.status].bg +
              ' ' +
              ProjectStatusKeys[project.status].hoverWidth
            } overflow-hidden group-hover:rounded transition-all duration-300 ease-in-out`}
          >
            <span className='py-1'>
              {project.status === 'Started' ? (
                <FaRocket />
              ) : project.status === 'In Development' ? (
                <FaScrewdriverWrench />
              ) : project.status === 'Completed' ? (
                <FaCircleCheck />
              ) : (
                <FaCircleExclamation />
              )}
            </span>
            <span className='hidden group-hover:inline-block'>
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
