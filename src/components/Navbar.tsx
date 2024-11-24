import { Link } from 'react-router-dom';
import { contactInfo } from '../data';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center px-4 py-8'>
      <ul className='flex items-center justify-center gap-x-10'>
        <NavLink text='Home' to={''} />
        <NavLink text='CV' to={'/cv'} />
        <NavLink text={'Contact'} to={'mailto:' + contactInfo.email} />
      </ul>
    </nav>
  );
};

function NavLink({ to = '', text = '' }: { to: string; text: string }) {
  return (
    <Link className='relative font-semibold group ' to={to}>
      <span className='text-lg tracking-wide text-gray-600 transition hover:text-gray-800 dark:hover:text-white dark:text-gray-200'>
        {text}
      </span>
      <span className='absolute w-[5px] h-[5px] transition ease-in-out origin-center -translate-x-1/2 bg-gray-600 dark:bg-gray-200 rounded-full opacity-0 -bottom-3 left-1/2 group-hover:opacity-100 group-hover:bg-gray-700 dark:group-hover:bg-white group-hover:animate-dot_to_bar'></span>
    </Link>
  );
}

export default Navbar;
