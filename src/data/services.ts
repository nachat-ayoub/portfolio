import projectsJsonData from './projects.json';
import { IProject, IProjectsFilter } from './types';

const projects = projectsJsonData as IProject[];

export interface IProjectData {
  projects: IProject[];
  tags: string[];
  status: string[];
}

export function getProjects(filter?: IProjectsFilter | null): IProjectData {
  const tags = [...new Set(projects.flatMap((project) => project.tags))];
  const status = [...new Set(projects.map((project) => project.status))];

  const filteredProjects = filter
    ? projects.filter((project) => filterProjects(project, filter))
    : projects;

  const sortBy = 'startDate';
  const sortOrder : number = -1;

  const sortedProjects =
    filteredProjects.length > 1
      ? filteredProjects.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
            return sortOrder === 1 ? -1 : 1;
          }
          if (a[sortBy] > b[sortBy]) {
            return sortOrder === 1 ? 1 : -1;
          }
          return 0;
        })
      : filteredProjects;

  return {
    projects: sortedProjects,
    tags,
    status,
  };
}

export function getProjectById(id: number) {
  const project = projects.find((_project) => _project.id === id);

  return project;
}

function filterProjects(project: IProject, filter: IProjectsFilter): boolean {
  const { id, tags, title, status } = filter;

  // Filter by id
  if (id && id > 0 && project.id !== id) {
    return false;
  }

  // Filter by tags
  if (tags && tags.length > 0) {
    if (!tags.every((tag) => project.tags.includes(tag))) {
      return false;
    }
  }

  // Filter by title
  if (title && !project.title.toLowerCase().includes(title.toLowerCase())) {
    return false;
  }

  // Filter by status
  if (status && project.status !== status) {
    return false;
  }

  return true;
}
