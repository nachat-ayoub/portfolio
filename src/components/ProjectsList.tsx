import ProjectCardMobileVersion from './ProjectCardMobileVersion';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobileDevice } from '../utils';
import { IProject } from '../data/types';
import ProjectCard from './ProjectCard';
import React from 'react';

interface IProjectsListProps {
  projects: IProject[] | [] | undefined;
}

const ProjectsList: React.FC<IProjectsListProps> = ({ projects }) => {
  return projects && projects.length > 0 ? (
    isMobileDevice() ? (
      <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5'>
        {projects.map((project) => (
          <ProjectCardMobileVersion key={project.id} project={project} />
        ))}
      </div>
    ) : (
      <motion.div
        layout
        className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5'
      >
        <AnimatePresence>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    )
  ) : (
    <motion.div layout className='py-14 text-center'>
      <motion.h3>No Projects With This Filter</motion.h3>
    </motion.div>
  );
};

export default ProjectsList;
