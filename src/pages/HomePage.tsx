import { IProjectData, getProjects } from '../data/services';
import { IProjectsFilter } from '../data/types';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import React from 'react';
import ProjectsList from '../components/ProjectsList';
import Title from '../components/Title';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [searchFilters, setSearchFilters] = useState<IProjectsFilter | null>(
    null
  );

  const [data, setData] = useState<IProjectData | null>(null);

  useEffect(() => {
    const filteredProjectsData = getProjects(searchFilters);

    setData(filteredProjectsData);
  }, [searchFilters]);

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <div className='py-4 px-2 md:px-10 flex flex-col gap-y-6'>
        <Title content='Projects' />

        {/* <div className=''>
        <span className='text-lg sm:hidden'>xs</span>
        <span className='text-lg hidden sm:inline-block md:hidden'>sm</span>
        <span className='text-lg hidden md:inline-block lg:hidden'>md</span>
        <span className='text-lg hidden lg:inline-block xl:hidden'>lg</span>
        <span className='text-lg hidden xl:inline-block 2xl:hidden'>xl</span>
        <span className='text-lg hidden 2xl:inline-block'>2xl</span>
      </div> */}

        <SearchBar
          setSearchFilters={(filter?: IProjectsFilter | null) => {
            if (filter) setSearchFilters(filter);
          }}
          searchFilters={searchFilters}
        />

        <FilterSection
          data={data}
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
        />

        <ProjectsList projects={data?.projects} />
      </div>
    </div>
  );
};

export default Home;

function FilterSection({
  data,
  searchFilters,
  setSearchFilters,
}: {
  data: IProjectData | null;
  searchFilters: IProjectsFilter | null;
  setSearchFilters: (
    val:
      | IProjectsFilter
      | null
      | ((val: IProjectsFilter | null) => IProjectsFilter | null)
  ) => void;
}) {
  return (
    <>
      {/* //* Tags */}
      <section className=''>
        <h4 className='capitalize mb-2'>tags:</h4>
        <div className='flex flex-wrap gap-2'>
          <button
            className={`tag ${
              (!searchFilters?.tags || searchFilters?.tags?.length === 0) &&
              'active'
            }`}
            onClick={() => {
              const active =
                !searchFilters?.tags || searchFilters?.tags?.length === 0;

              if (!active) {
                setSearchFilters((val) => ({
                  ...val,
                  tags: [],
                }));
              }
            }}
          >
            All
          </button>
          {data?.tags &&
            data?.tags.map((tag) => (
              <button
                key={tag}
                className={`tag ${
                  searchFilters?.tags &&
                  searchFilters?.tags?.includes(tag) &&
                  'active'
                }`}
                onClick={() => {
                  const active =
                    searchFilters?.tags && searchFilters?.tags?.includes(tag);
                  if (active) {
                    setSearchFilters((val) => ({
                      ...val,
                      tags: (val?.tags ?? []).filter((_tag) => _tag !== tag),
                    }));
                  } else {
                    setSearchFilters((val) => ({
                      ...val,
                      tags: [...(val?.tags ?? []), tag],
                    }));
                  }
                }}
              >
                {tag}
              </button>
            ))}
        </div>
      </section>
    </>
  );
}
