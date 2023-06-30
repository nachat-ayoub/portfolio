import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary: { bg: 'bg-blue-500 hover:bg-blue-600', border: 'bg-blue-700' },
  secondary: { bg: 'bg-gray-500 hover:bg-gray-600', border: 'bg-gray-700' },
  danger: { bg: 'bg-red-500 hover:bg-red-600', border: 'bg-red-700' },
  success: { bg: 'bg-green-500 hover:bg-green-600', border: 'bg-green-700' },
  warning: { bg: 'bg-yellow-500 hover:bg-yellow-600', border: 'bg-yellow-700' },
};

interface IButtonProps {
  children?: React.ReactNode;
  color?: keyof typeof variants;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  href,
  target,
  children,
}) => {
  return (
    <div className='z-10 relative w-fit'>
      {href ? (
        <Link to={href} target={target}>
          <button
            className={`uppercase flex items-center text-sm text-white font-bold tracking-wider px-5 py-2 shadow rounded hover:translate-y-[1px] transition ${variants[color].bg}`}
          >
            {children}
          </button>
          <span
            className={
              '-z-10 absolute left-0 -bottom-1 w-full h-2 rounded-b ' +
              variants[color].border
            }
          ></span>
        </Link>
      ) : (
        <>
          <button
            className={`uppercase text-sm text-white font-bold tracking-wider px-5 py-2 shadow rounded hover:translate-y-[1px] transition ${variants[color].bg}`}
          >
            {children}
          </button>
          <span
            className={
              '-z-10 absolute left-0 -bottom-1 w-full h-2 rounded-b ' +
              variants[color].border
            }
          ></span>
        </>
      )}
    </div>
  );
};

export default Button;
