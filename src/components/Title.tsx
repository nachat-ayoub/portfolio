import React from 'react';

interface ITitleProps {
  content: string;
}

const Title: React.FC<ITitleProps> = ({ content }) => {
  return (
    <div className='z-10 relative w-fit inline-block md:mb-4'>
      <span className='text-gray-800 dark:text-gray-50 text-2xl md:text-3xl lg:text-4xl z-10 pr-2'>
        {content}
      </span>
      <div className='-z-10 absolute -left-1 -bottom-0.5 md:-bottom-2 w-full h-4 md:h-6 bg-primary/80'></div>
    </div>
  );
};

export default Title;
