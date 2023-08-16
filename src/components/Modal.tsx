import { FaTimes } from 'react-icons/fa';
import { FC } from 'react';
import { randomCantWaitButtonText } from '../utils';
import Button from './Button';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, title, description }) => {
  const overlayClass = `z-50 fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-[2px] transition-opacity ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`;

  const modalClass = `fixed inset-0 px-3 flex items-center justify-center transition-opacity ${
    isOpen ? 'opacity-100' : 'opacity-0'
  }`;

  const contentClass = `bg-white py-2 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full ${
    isOpen ? 'scale-100' : 'scale-95'
  }`;

  return (
    <div className={overlayClass}>
      <div className={modalClass}>
        <div className={contentClass}>
          <div className='px-6 py-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg md:text-xl font-medium text-gray-900 dark:text-white'>
                {title}
              </h3>
              <button
                type='button'
                className='text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150'
                onClick={onClose}
              >
                <span className='sr-only'>Close</span>
                <FaTimes />
              </button>
            </div>
            <p className='mt-4 text-sm md:text-[15px] text-gray-600 dark:text-gray-400'>
              {description}
            </p>

            <div className='mt-6'>
              <Button color='success' onClick={onClose} size='xs'>
                {randomCantWaitButtonText()}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
