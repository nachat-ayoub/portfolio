import { IProject, ProjectStatusKeys } from '../data/types';
import { useHover } from '../utils/hooks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaCircleCheck,
  FaCircleExclamation,
  FaScrewdriverWrench,
} from 'react-icons/fa6';
import Image from './Image';

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Link
      className='w-full sm:w-[25.5rem] md:w-[20rem] lg:w-[25rem]'
      title={project.title}
      to={`/projects/${project.id}`}
    >
      <motion.div
        className='w-full border-gray-200 dark:border-none rounded-b-sm border overflow-hidden rounded-t-md dark:shadow-[#232433] dark:shadow-sm mx-auto'
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        layout
      >
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
        <div
          className='overflow-hidden group relative w-full h-64 md:h-48 lg:h-64'
          ref={hoverRef as React.LegacyRef<HTMLDivElement>}
        >
          <div className='pointer-events-none -translate-y-full group-hover:translate-y-0 transition absolute h-full w-full top-0 left-0 bg-black/60 shadow-[0_0_150px_rgba(0,0,0,.75)_inset] flex justify-center items-center'>
            <ul className='flex justify-center flex-wrap gap-2 p-4'>
              {isHovered &&
                project.tags.map((tag, index) => (
                  <motion.li
                    key={tag}
                    initial={{
                      y: 10,
                      scaleY: 1,
                      opacity: 0,
                      transformOrigin: 'bottom',
                    }}
                    animate={{
                      transformOrigin: 'bottom',
                      y: [-10, 10, 0],
                      opacity: 1,
                      scaleY: [1, 0.8, 1],
                      transition: {
                        duration: 0.2,
                        delay:
                          index * 0.02 + (1 - project?.tags.length / 10) * 0.2,
                        scaleY: { duration: 0.3 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className={'tag text-[13px] active rounded-sm font-bold'}
                  >
                    {tag}
                  </motion.li>
                ))}
            </ul>
          </div>

          <Image
            className='w-full h-full object-cover rounded-b-sm shadow'
            src={project.image}
            alt={project.title}
          />

          <div
            className={`absolute top-1.5 right-1.5 whitespace-nowrap text-white text-sm px-1.5 py-0.5 rounded-[50%] shadow-md flex items-center gap-1.5 ${
              ProjectStatusKeys[project.status].bg
            } w-[26px] h-[26px] ${
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
            <span className='invisible group-hover:visible _delay-500'>
              {project.status}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
