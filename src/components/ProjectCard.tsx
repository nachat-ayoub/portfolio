import { Link } from 'react-router-dom';
import { IProject } from '../data/types';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleHover = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <Link title={project.title} to={`/projects/${project.id}`}>
      <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className='w-[100%] sm:w-[25.5rem] md:w-[20rem] lg:w-[25rem] border-gray-200 border overflow-hidden rounded-t-md'
      >
        <div className='relative w-full bg-[#ebebeb] py-1.5'>
          {/* //* buttons */}
          <div className='absolute top-1/2 -translate-y-1/2 px-2 flex gap-1.5'>
            <div className='bg-red-500/90 w-3 h-3 rounded-full'></div>
            <div className='bg-yellow-500/90 w-3 h-3 rounded-full'></div>
            <div className='bg-green-500/90 w-3 h-3 rounded-full'></div>
          </div>

          {/* //* title */}
          <div className='text-center text-xs text-[#8a8a8a] font-bold capitalize'>
            {project.title}
          </div>
        </div>
        <div className='overflow-hidden group relative w-full h-64 md:h-48 lg:h-64'>
          <motion.div
            className='-translate-y-full group-hover:translate-y-0 transition absolute h-full w-full top-0 left-0 bg-black/60 shadow-[0_0_150px_rgba(0,0,0,.75)_inset] flex justify-center items-center'
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            initial={'rest'}
            whileHover={'hover'}
          >
            <ul className='flex justify-center flex-wrap gap-2 p-4'>
              {project.tags.map((tag, index) => (
                <motion.li
                  key={tag}
                  variants={{
                    rest: {
                      y: 10,
                      scaleY: 1,
                      opacity: 0,
                      transformOrigin: 'bottom',
                    },
                    hover: {
                      transformOrigin: 'bottom',
                      y: [-10, 10, 0],
                      opacity: 1,
                      scaleY: [1, 0.8, 1],
                      transition: {
                        duration: 0.2,
                        delay: index * 0.03,
                        scaleY: { duration: 0.3 },
                        opacity: { duration: 0.1 },
                      },
                    },
                  }}
                  className='tag active rounded-sm font-bold'
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <img
            className='w-full h-full object-cover rounded-b-sm shadow'
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className=''></div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
