import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import GlowingBlobParticle from './GlowingParticles';
import GlowingParticles from './GlowingParticles';

interface ILayoutProrps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  customClassName?: string;
}

const Layout: React.FC<ILayoutProrps> = ({
  children,
  className = '',
  customClassName = '',
}) => {
  return (
    <>
      <main
        className={
          customClassName ||
          'relative overflow-hidden min-h-screen bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-dark dark:to-[#0E142B] dark:text-gray-50' +
            className
        }
      >
        {/* <div className='absolute -top-[250px] -right-1/4 bg-white/40 blur-[150px] rounded-full w-1/3 max-w-md h-1/3 max-h-[400px] z-0' />

        <div className='absolute top-[450px] -left-1/4 bg-gradient-to-tr from-blue-600/50 to-sky-500/2 blur-[150px] rounded-full w-1/3 max-w-md h-1/3 max-h-[400px] z-0' />

        <div className='absolute top-[1400px] -left-1/4 bg-gradient-to-tr from-pink-600/50 via-pink-600/50 to-purple-500/50 blur-[150px] rounded-full w-1/3 max-w-md h-1/3 max-h-[400px] z-0' /> */}

        <GlowingParticles
          colors={[
            'bg-blue-500',
            'bg-amber-500',
            'bg-sky-500',
            'bg-pink-500',
            'bg-red-500',
          ]}
        />

        <div className='relative z-10'>{children}</div>
      </main>

      <ThemeSwitcher />
    </>
  );
};

export default Layout;
