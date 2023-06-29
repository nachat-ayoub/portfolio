import React from 'react';

interface ITitleProps {
  content: string;
}

const Title: React.FC<ITitleProps> = ({ content }) => {
  return (
    <div className='relative w-fit inline-block mb-4'>
      <span className='text-4xl invisible'>{content}</span>
      <span className='absolute top-0 left-0 text-gray-800 text-4xl z-10'>
        {content}
      </span>
      <span className='absolute -left-1 -bottom-2 w-[calc(100%+1.5rem)] h-6 bg-primary/80 z-0'></span>
    </div>
  );
};

export default Title;
