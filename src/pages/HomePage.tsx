import { IProjectData, getProjects } from '../data/services';
import FilterSection from '../components/FilterSection';
import ProjectsList from '../components/ProjectsList';
// import WindowSize from '../components/WindowSize';
import SearchBar from '../components/SearchBar';
import { IProjectsFilter } from '../data/types';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import React from 'react';
import HeroSection from '../components/HeroSection';

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
    <Layout>
      <div className='w-full py-4 px-3 md:px-10 flex flex-col gap-y-6'>
        <HeroSection />

        <Title content='Projects' />

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
    </Layout>
  );
};

export default Home;
