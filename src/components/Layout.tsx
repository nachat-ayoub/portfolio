import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

interface ILayoutProrps {
  children: JSX.Element;
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
      <ThemeSwitcher />

      <main
        className={
          customClassName ||
          'min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-800 dark:text-gray-50 ' +
            className
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
