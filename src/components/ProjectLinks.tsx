import { MdOutlineOpenInNew } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { ImGithub } from 'react-icons/im';
import { IProject } from '../data/types';
import Button from './Button';
import { useState } from 'react';
import Modal from './Modal';

interface IProjectLinksProps {
  project: IProject;
}

export default function ProjectLinks({ project }: IProjectLinksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    description: '',
  });

  const openModal = (modalName: 'demo' | 'github') => {
    setIsOpen(true);

    if (modalName === 'demo') {
      setModalProps({
        title: '🚀 Coming Soon!',
        description:
          project.issue ??
          "Exciting things are in the works! While the live demo for this project is not yet available, I'm actively working to bring it to life and share its unique features. Stay tuned for updates. 🛠️",
      });
    } else {
      setModalProps({
        title: '🔧 GitHub Repo Pending',
        description:
          'The GitHub repository for this project is currently being set up. It will be accessible soon for you to explore the code and details. 🕵️‍♂️📂',
      });
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} {...modalProps} />
      <div className='flex gap-4 justify-between flex-col md:flex-row'>
        <Button
          target='_blank'
          href={project.liveDemo ?? '#'}
          onClick={() => {
            if (!project.liveDemo) openModal('demo');
          }}
        >
          <IconContext.Provider value={{ size: '18' }}>
            <div className='mr-2'>
              <MdOutlineOpenInNew />
            </div>
          </IconContext.Provider>
          <span>visit the website</span>
        </Button>

        <Button
          onClick={() => {
            if (!project.githubRepo) openModal('github');
          }}
          href={project.githubRepo ?? `#`}
          target={'_blank'}
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
    </>
  );
}
