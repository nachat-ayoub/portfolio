import React from 'react';
import { IProject } from '../data/types';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface IProjectsListProps {
  projects: IProject[] | [] | undefined;
}

const ProjectsList: React.FC<IProjectsListProps> = ({ projects }) => {
  return projects && projects.length > 0 ? (
    <motion.div
      layout
      className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center w-full gap-5'
    >
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  ) : (
    <motion.div layout className='py-14 text-center'>
      <motion.h3>No Projects With This Filter</motion.h3>
    </motion.div>
  );
};

export default ProjectsList;
