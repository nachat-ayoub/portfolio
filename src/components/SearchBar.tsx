import { IProjectsFilter } from '../data/types';

interface IProps {
  setSearchFilters: (filter?: IProjectsFilter | null) => void;
  searchFilters: IProjectsFilter | null;
}

export default function SearchBar({ setSearchFilters, searchFilters }: IProps) {
  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className='' onSubmit={handleForm}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          id='projects-search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition'
          placeholder='Projects Search...'
          required
          onChange={(e) =>
            setSearchFilters({
              ...searchFilters,
              title: e.target.value,
            })
          }
          value={searchFilters?.title ?? ''}
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 transition'
        >
          Search
        </button>
      </div>
    </form>
  );
}
