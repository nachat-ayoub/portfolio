import { Link } from 'react-router-dom';
import React from 'react';

const variants = {
  primary: {
    bg: 'bg-blue-500 hover:bg-blue-600',
    border: 'bg-blue-700',
  },
  secondary: {
    bg: 'bg-gray-500 hover:bg-gray-600',
    border: 'bg-gray-700',
  },
  danger: {
    bg: 'bg-red-500 hover:bg-red-600',
    border: 'bg-red-700',
  },
  success: {
    bg: 'bg-green-500 hover:bg-green-600',
    border: 'bg-green-700',
  },
  warning: {
    bg: 'bg-yellow-500 hover:bg-yellow-600',
    border: 'bg-yellow-700',
  },
  slate: {
    bg: 'bg-slate-500 hover:bg-slate-600',
    border: 'bg-slate-700',
  },
  gray: {
    bg: 'bg-gray-500 hover:bg-gray-600',
    border: 'bg-gray-700',
  },
  zinc: {
    bg: 'bg-zinc-500 hover:bg-zinc-600',
    border: 'bg-zinc-700',
  },
  neutral: {
    bg: 'bg-neutral-500 hover:bg-neutral-600',
    border: 'bg-neutral-700',
  },
  stone: {
    bg: 'bg-stone-500 hover:bg-stone-600',
    border: 'bg-stone-700',
  },
  red: {
    bg: 'bg-red-500 hover:bg-red-600',
    border: 'bg-red-700',
  },
  orange: {
    bg: 'bg-orange-500 hover:bg-orange-600',
    border: 'bg-orange-700',
  },
  amber: {
    bg: 'bg-amber-500 hover:bg-amber-600',
    border: 'bg-amber-700',
  },
  yellow: {
    bg: 'bg-yellow-500 hover:bg-yellow-600',
    border: 'bg-yellow-700',
  },
  lime: {
    bg: 'bg-lime-500 hover:bg-lime-600',
    border: 'bg-lime-700',
  },
  green: {
    bg: 'bg-green-500 hover:bg-green-600',
    border: 'bg-green-700',
  },
  emerald: {
    bg: 'bg-emerald-500 hover:bg-emerald-600',
    border: 'bg-emerald-700',
  },
  teal: {
    bg: 'bg-teal-500 hover:bg-teal-600',
    border: 'bg-teal-700',
  },
  cyan: {
    bg: 'bg-cyan-500 hover:bg-cyan-600',
    border: 'bg-cyan-700',
  },
  sky: {
    bg: 'bg-sky-500 hover:bg-sky-600',
    border: 'bg-sky-700',
  },
  blue: {
    bg: 'bg-blue-500 hover:bg-blue-600',
    border: 'bg-blue-700',
  },
  indigo: {
    bg: 'bg-indigo-500 hover:bg-indigo-600',
    border: 'bg-indigo-700',
  },
  violet: {
    bg: 'bg-violet-500 hover:bg-violet-600',
    border: 'bg-violet-700',
  },
  purple: {
    bg: 'bg-purple-500 hover:bg-purple-600',
    border: 'bg-purple-700',
  },
  fuchsia: {
    bg: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    border: 'bg-fuchsia-700',
  },
  pink: {
    bg: 'bg-pink-500 hover:bg-pink-600',
    border: 'bg-pink-700',
  },
  rose: {
    bg: 'bg-rose-500 hover:bg-rose-600',
    border: 'bg-rose-700',
  },
};

interface IButtonProps {
  children?: React.ReactNode;
  color?: keyof typeof variants;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean;
  fit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  size?: 'xs' | 'sm';
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  href,
  target,
  children,
  download = false,
  fit = true,
  onClick,
  size = 'sm',
}) => {
  return (
    <div className={`${!fit && 'w-full'} md:w-fit z-10 relative`}>
      {href ? (
        !download ? (
          <Link to={href} target={href === '#' ? '_self' : target}>
            <ButtonContent size={size} onClick={onClick} color={color}>
              {children}
            </ButtonContent>
          </Link>
        ) : (
          <a target={href === '#' ? '_self' : target} href={href}>
            <ButtonContent size={size} onClick={onClick} color={color}>
              {children}
            </ButtonContent>
          </a>
        )
      ) : (
        <ButtonContent size={size} onClick={onClick} color={color}>
          {children}
        </ButtonContent>
      )}
    </div>
  );
};

export default Button;

function ButtonContent({
  onClick = () => {},
  children,
  color,
  size,
}: {
  children: IButtonProps['children'];
  color: keyof typeof variants;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  size: 'xs' | 'sm';
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full justify-center md:w-fit uppercase flex items-center text-xs ${
          size === 'sm' ? 'md:text-sm' : 'md:text-xs'
        } text-white font-bold tracking-wider px-3 md:px-5 py-2 shadow rounded hover:translate-y-[1px] transition ${
          variants[color].bg
        }`}
      >
        {children}
      </button>
      <span
        className={
          '-z-10 absolute left-0 -bottom-1 w-full h-2 rounded-b ' +
          variants[color].border
        }
      />
    </>
  );
}
