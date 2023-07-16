import React from 'react';

interface ITestCardAnimationProps {}

const TestCardAnimation: React.FC<ITestCardAnimationProps> = () => {
  const tags = [
    'web',
    'frontend',
    'React.js',
    'Sass',
    'Redux',
    'Redux Toolkit',
    'LocalStorage',
  ];

  return (
    <div className='p-10'>
      {/* //? Card */}
      <div className='relative group h-72 w-[33rem] rounded overflow-hidden border border-gray-200'>
        <ul className='absolute h-full -translate-y-full group-hover:translate-y-0 flex gap-2 justify-center flex-wrap items-center'>
          {tags.map((tag, i) => (
            <li key={tag} className='tag h-fit active _tagSlideInAnimation'>
              {i + '- ' + tag}
            </li>
          ))}
        </ul>

        <img
          className='w-full h-full object-cover'
          src='/assets/ecommerce.png'
          alt='Travel App'
        /> 
      </div>
    </div>
  );
};

export default TestCardAnimation;
