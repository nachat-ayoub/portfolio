import React from 'react';

interface ITitleProps {
  content: string;
}

const Title: React.FC<ITitleProps> = ({ content }) => {
  return (
    <div className='z-10 relative w-fit inline-block mb-4'>
      <span className='text-gray-800 text-4xl z-10'>{content}</span>
      <span className='-z-10 absolute -left-1 -bottom-2 w-[calc(100%+1.5rem)] h-6 bg-primary/80'></span>
    </div>
  );
};

export default Title;
