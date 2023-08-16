import GlowingParticles from './GlowingParticles';
import ThemeSwitcher from './ThemeSwitcher';
import React from 'react';

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
        <GlowingParticles
          colors={[
            'bg-emerald-500/50',
            'bg-teal-500/50',
            'bg-cyan-500/50',
            'bg-sky-500/50',
            'bg-blue-500/50',
            'bg-indigo-500/50',
            'bg-violet-500/50',
            'bg-purple-500/50',
            'bg-fuchsia-500/50',
          ]}
        />

        <div className='relative z-10'>{children}</div>
      </main>

      <ThemeSwitcher />
    </>
  );
};

export default Layout;
