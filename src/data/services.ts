import projectsJsonData from './projects.json';
import { IProject, IProjectsFilter } from './types';

const projects = projectsJsonData as IProject[];

export interface IProjectData {
  projects: IProject[];
  tags: string[];
  technologies: string[];
  teamMembers: string[];
  status: string[];
}

export function getProjects(filter?: IProjectsFilter | null): IProjectData {
  const filteredProjects = filter
    ? projects.filter((project) => filterProjects(project, filter))
    : projects;
  const tags = [...new Set(projects.flatMap((project) => project.tags))];
  const technologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];
  const teamMembers = [
    ...new Set(
      projects.flatMap((project) =>
        project.teamMembers.map((member) => member.name)
      )
    ),
  ];
  const status = [...new Set(projects.map((project) => project.status))];

  return {
    projects: filteredProjects,
    tags,
    technologies,
    teamMembers,
    status,
  };
}

export function getProjectById(id: number): IProject {
  const [project] = projects.filter((_project) =>
    filterProjects(_project, { id })
  );

  return project;
}

function filterProjects(project: IProject, filter: IProjectsFilter): boolean {
  const { id, technologies, tags, title, teamMember, status } = filter;

  // Filter by id
  if (id && id > 0 && project.id !== id) {
    return false;
  }

  // Filter by technologies
  if (technologies && technologies.length > 0) {
    if (!technologies.every((tech) => project.technologies.includes(tech))) {
      return false;
    }
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

  // Filter by teamMember
  if (
    teamMember &&
    !project.teamMembers.some((member) =>
      member.name.toLowerCase().includes(teamMember.toLowerCase())
    )
  ) {
    return false;
  }

  // Filter by status
  if (status && project.status !== status) {
    return false;
  }

  return true;
}
